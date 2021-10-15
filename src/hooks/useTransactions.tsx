import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}

type TransactionProps = Omit<Transaction, "id" | "createAt">;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionProps) => Promise<void>;
}

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, SetTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    try {
      api
        .get("transactions")
        .then((response) => SetTransactions(response.data.transactions));
    } catch (error: any) {}
  }, []);

  async function createTransaction(transactionInput: TransactionProps) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createAt: new Date(),
    });
    const { transaction } = response.data;
    SetTransactions([...transactions, transaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);

  return context;
}

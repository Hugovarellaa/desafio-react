import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface Props {
  children: ReactNode;
}

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}

interface TransactionsData {
  transactions: Transaction[];
  createTransactions: (transaction: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<Transaction, "id" | "createAt">;

export const TransactionContext = createContext({} as TransactionsData);

export function TransactionContextProvider({ children }: Props) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransactions(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createAt: new Date()
    });
    const {transaction} = response.data
    setTransactions([
      ...transactions,
      transaction,
    ])
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
}

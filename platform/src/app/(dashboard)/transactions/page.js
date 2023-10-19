"use client";
import React, { useEffect, useState, useCallback } from "react";
import { PageTitle } from "../../components/PageTitle";
import MainComponent from "../../components/MainComponent";
import axios from "axios";

const Transactions = () => {
    const [business, setBusiness] = useState({});
    const [transactions, setTransactions] = useState([]);
    const apiURL = process.env.NEXT_PUBLIC_BACKEND_URL;

    const getProfile = useCallback(async () => {
        try {
            const res = await axios.get(`${apiURL}/business/owner`, { withCredentials: true });
            setBusiness(res.data?.owner);
        } catch (err) {
            console.error("Error fetching profile:", err);
        }
    }, [apiURL]);

    const getTransactions = useCallback(async (ref) => {
        try {
            const res = await axios.get(`${apiURL}/business/${ref}/transaction/all`, {
                withCredentials: true,
            });
            setTransactions(res.data?.transactions);
        } catch (err) {
            console.error("Error fetching transactions:", err);
        }
    }, [apiURL]);

    useEffect(() => {
        getProfile();
    }, [getProfile]);

    useEffect(() => {
        if (business?.id) getTransactions(business?.business_ref);
    }, [business, getTransactions]);

    return (
        <div>
            <PageTitle title={"Transactions"} />

            <MainComponent>
                <div className="overflow-x-auto md:overflow-x-auto ">
                    <table className="min-w-full leading-normal table-auto overflow-x-auto relative order-table bg-white">
                        {/* ... (rest of the table header) */}
                        <tbody className="divide-y divide-gray-200">
                            {transactions?.map((transaction) => {
                                const { currency, amount, name, email, reference, channel, created_at } = transaction;
                                return (
                                    <tr key={transaction.id || reference}>
                                        {/* ... (rest of the table rows) */}
                                        <td className="px-5 py-5 text-sm whitespace-nowrap">
                                            <p className="text-sm text-[#667085]">
                                                {currency} {amount}
                                            </p>
                                        </td>
                                        {/* ... (rest of the table data) */}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </MainComponent>
        </div>
    );
};

export default Transactions;

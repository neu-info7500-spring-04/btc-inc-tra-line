import TransactionInfo from "./components/TransactionInfo"
import IncomingTransactions from "./components/IncomingTransactions"

export default function Page() {
    return (

        <div>
            <div>
                <TransactionInfo/>
            </div>
            <div>
                <IncomingTransactions/>
            </div>
        </div>
    )
}
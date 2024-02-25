import type {Metadata} from 'next'
import './CSS/globals.css'


export const metadata: Metadata = {
    title: "BTC-Transac-Exp",
    description: "Bitcoin Incoming Transaction Explorer",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <section>
            <div>
            {children}
            </div>
        </section>
        </body>
        </html>
    )
}
import type {Metadata} from 'next'


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
            {children}
        </section>
        </body>
        </html>
    )
}
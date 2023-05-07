import Header from '@/components/header'

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Header position="sticky" />

      {children}
    </main>
  )
}

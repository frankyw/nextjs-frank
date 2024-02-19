/**
 * Footer component.
 */
export default function Footer() {
  return (
    <footer className="text-sm text-center border-t-2 p-8">
      &copy; {new Date().getFullYear()} Frank W. Running on Next.js 14 &amp; headless WordPress on Vercel.
    </footer>
  )
}

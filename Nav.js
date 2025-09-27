import Link from 'next/link'
export default function Nav() {
  return (
    <nav className="header container">
      <div className="flex items-center space-x-3">
        <div className="text-2xl font-bold">50 Shades of Gridiron</div>
      </div>
      <div className="flex space-x-4">
        <Link href="/"><a>Dashboard</a></Link>
        <Link href="/roster"><a>Roster</a></Link>
        <Link href="/available"><a>Available</a></Link>
        <Link href="/opponent"><a>Opponent</a></Link>
        <Link href="/power"><a>Power Rankings</a></Link>
      </div>
    </nav>
  )
}
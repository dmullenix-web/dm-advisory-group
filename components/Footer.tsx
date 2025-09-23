
export default function Footer(){
  return (
    <footer className="border-t border-[color:var(--line)] bg-white py-9">
      <div className="container grid gap-4 md:grid-cols-2 items-center text-[color:var(--muted)]">
        <div>
          <div className="font-extrabold text-[color:var(--text)]">DM Advisory Group, LLC</div>
          <div className="text-sm">Fractional CIO • Strategy • Security • Operations • Data</div>
        </div>
        <div className="text-sm md:text-right">© {new Date().getFullYear()} DM Advisory Group. All rights reserved.</div>
      </div>
    </footer>
  )
}

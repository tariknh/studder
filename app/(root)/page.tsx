//app/page.tsx
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
      <h1>Welcome</h1>
    </div>
  )
}
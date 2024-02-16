"use client"

import Link from "next/link"

export function JoinButton() {
  return (
    <>
      <Link
        href="/contact"
        className="landing-btn --primary font-display font-medium"
      >
        JOIN US
      </Link>
    </>
  )
}

export function ActivitiesButton() {
  return (
    <>
      <Link href="/activities" className="landing-btn --primary font-display">
        ACTIVITIES
      </Link>
    </>
  )
}

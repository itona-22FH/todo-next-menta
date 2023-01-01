import Link from 'next/link'
import React from 'react'
import { UrlObject } from 'url'

export const LinkButton = (props: { url: string | UrlObject }) => {
  return (
    <button>
    <Link href={props.url}>完了したタスク一覧</Link>
    </button>
  )
}

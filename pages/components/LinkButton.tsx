import Link from 'next/link'
import React from 'react'
import { UrlObject } from 'url'

export const LinkButton = (props: { url: string | UrlObject, text: string}) => {
  return (
    <button>
    <Link href={props.url}>{props.text}</Link>
    </button>
  )
}

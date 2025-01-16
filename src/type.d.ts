type ElmaProps = {
  root: HTMLDivElement | null
  contextData?: ElmaContext
  server?: ElmaServer
}

type ElmaServer = {
  rpc: {
    fetchActivityData: () => Promise<void>
    fetchServicesData: () => Promise<void>
  }
}

type ElmaContext = {
  services: { data: LinksBlock[]; error: string }
  activity?: object
}

interface LinksBlock {
  blockName: string
  links: {
    href: string
    text: string
    order?: number
  }[]
}

type CommonBlockContext = LinksBlock[]

interface ActivityBlockContext {
  data: object | null | undefined
  error: string
}

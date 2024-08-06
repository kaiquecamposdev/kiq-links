import { links } from '@/utils/links'

export function Links() {
  return (
    <>
      <ul className="flex flex-1 flex-col gap-4">
        {links.map(({ path, text, Icon }) => {
          return (
            <li key={path} className="flex rounded-lg shadow-border">
              <a
                href={path}
                target="_blank"
                className="group flex flex-1 items-center rounded-lg border border-primary/30 bg-primary/10 px-6 py-4 text-center text-base font-medium leading-relaxed text-primary transition-colors hover:border-primary"
                rel="noreferrer"
              >
                <i className="color-primary absolute group-hover:scale-[1.1] max-sm:hidden">
                  <Icon width="24" height="24" />
                </i>
                <span className="flex-1">{text}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

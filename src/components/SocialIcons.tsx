import { socialLinks } from '@/utils/socialIcons'

export function SocialIcons() {
  return (
    <>
      <ul className="flex flex-1 justify-center gap-4 p-6">
        {socialLinks.map(({ path, Icon }) => {
          return (
            <li key={path} className="flex rounded-lg">
              <a
                href={path}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center rounded-full bg-primary/10 p-2 transition-transform hover:scale-[1.1]"
              >
                <Icon width={24} height={24} className="color-primary" />
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

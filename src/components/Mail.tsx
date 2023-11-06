export function Mail(data: { width: string; height: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={data.width}
      height={data.height}
      stroke="currentColor"
      fill="currentColor"
    >
      <path d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.8 6.2 8ZM4 24V8.9l11.4 7.9a1 1 0 0 0 1.2 0L28 8.9V24Z" />
    </svg>
  )
}

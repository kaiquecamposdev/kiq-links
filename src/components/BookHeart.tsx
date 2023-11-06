export function BookHeart(data: { width: string; height: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={data.width}
      height={data.height}
      stroke="currentColor"
      fill="currentColor"
    >
      <path d="M4 10.7v14.6c0 2.9 2.4 4 4 4h20v-2.6H8C7.4 26.6 6.7 26.4 6.7 25.3s0.7-1.3 1.3-1.3H28V5.3c0-1.5-1.2-2.7-2.7-2.6H8c-1.6 0-4 1.1-4 4v4z m4-5.4h17.3v16H6.7V6.7c0-1.1 0.7-1.3 1.3-1.4z" />
      <path d="M16 18.7l4.5-4.4a2.8 2.8 0 0 0 0-4.1 3 3 0 0 0-4.2 0l-0.3 0.3-0.3-0.3a3 3 0 0 0-4.2 0 2.8 2.8 0 0 0 0 4.1L16 18.7z" />
    </svg>
  )
}

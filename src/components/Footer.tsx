
export function Footer() {
  const date = new Date().getFullYear()
  return(

    <footer className="border-t shadow">
      <div className="w-full mx-auto justify-center max-w-screen-xl p-4 md:flex md:justify-items-center md:tex-center">
        <span className="text-sm justify-center text-center text-gray-500 sm:text-center dark:text-gray-400">{date} <a href="https://github.com/Dev-Lops" target='_blank' rel="noopener" className="hover:underline">DevLops &copy;</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

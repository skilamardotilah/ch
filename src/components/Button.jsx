
export default function Button({
  variant = 'primary',
  size = 'md',
  rounded = 'xl',
  className = '',
  href,
  children,
  ...props
}) {
  const base = 'inline-flex items-center justify-center font-semibold transition'
  const sizes = { sm: 'px-3 py-1 text-sm', md: 'px-4 py-2', lg: 'px-6 py-3 text-lg' }
  const rounds = { full: 'rounded-full', xl: 'rounded-xl', none: 'rounded' }
  const variants = {
    primary: 'bg-brand-primary text-white hover:opacity-90',
    outline: 'border border-white text-white bg-transparent hover:bg-white/10',
    white: 'bg-white text-black hover:opacity-90',
    ghost: 'bg-transparent text-white hover:bg-white/10',
  }
  const cls = [base, sizes[size], rounds[rounded] || '', variants[variant], className].join(' ').trim()
  if (href) return <a href={href} className={cls} {...props}>{children}</a>
  return <button className={cls} {...props}>{children}</button>
}

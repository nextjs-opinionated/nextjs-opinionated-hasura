export default function isLocalhost() {
  return typeof window !== 'undefined' && document.location.host.match(/localhost/)
}

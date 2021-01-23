export default function truncateString(str, num) {
    if (str &&str.length <= num) {
      return str
    }
    return  str && str.slice(0, num) + '...'
  }
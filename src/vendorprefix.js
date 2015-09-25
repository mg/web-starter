export default function vendorPrefix(styles) {
  if (process.env.TEST === true) {
    let VendorPrefix = require('react-vendor-prefix')
    return VendorPrefix.prefix(styles)
  }
  return styles
}

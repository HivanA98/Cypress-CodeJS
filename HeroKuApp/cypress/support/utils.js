/**
 * Tanggal relatif dari hari ini dalam format dd/mm/yyyy (format yang dipakai CURA).
 * Dipakai agar test tidak rusak karena tanggal yang di-hardcode sudah lewat.
 *
 * @example formatDate(7) // seminggu dari sekarang
 */
export const formatDate = (daysFromToday = 0) => {
  const date = new Date()
  date.setDate(date.getDate() + daysFromToday)

  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  return `${dd}/${mm}/${date.getFullYear()}`
}

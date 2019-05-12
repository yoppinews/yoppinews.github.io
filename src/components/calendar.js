import PropTypes from "prop-types"
import React from "react"

const Calendar = ({ width, height }) => (
  <iframe
    src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=9mhlol8f4i4efotor5p2nb982s%40group.calendar.google.com&amp;color=%23853104&amp;src=9ueujgpcbrm8mr0qevver27bu0%40group.calendar.google.com&amp;color=%23711616&amp;src=g684on5b34rr9agv586jih11l4%40group.calendar.google.com&amp;color=%236B3304&amp;ctz=Asia%2FTokyo"
    style={{borderWidth: 0}}
    width={width}
    height={height}
  />
)

Calendar.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}

Calendar.defaultProps = {
  width: "100%",
  height: "600",
}

export default Calendar

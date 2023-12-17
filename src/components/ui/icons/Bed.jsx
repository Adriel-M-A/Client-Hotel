export default function Bed(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      fill="blue"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1 19V4h2v10h8V6h8q1.65 0 2.825 1.175T23 10v9h-2v-3H3v3H1Zm6-6q-1.25 0-2.125-.875T4 10q0-1.25.875-2.125T7 7q1.25 0 2.125.875T10 10q0 1.25-.875 2.125T7 13Zm6 1h8v-4q0-.825-.588-1.413T19 8h-6v6Zm-6-3q.425 0 .713-.288T8 10q0-.425-.288-.713T7 9q-.425 0-.713.288T6 10q0 .425.288.713T7 11Zm0 0q-.425 0-.713-.288T6 10q0-.425.288-.713T7 9q.425 0 .713.288T8 10q0 .425-.288.713T7 11Zm6-3h6q.825 0 1.413.588T21 10v4h-8V8Z"
      />
    </svg>
  );
}

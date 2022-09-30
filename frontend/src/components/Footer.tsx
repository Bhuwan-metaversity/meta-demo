import { Box } from "@mui/system"
import React from "react"

function Footer() {
  return (
    <div>
      <Box bgcolor="#282046" width={"100%"} py={2}>
        <footer
          style={{
            margin: "auto",
            fontSize: `var(--font-sm)`,
            textAlign: "center",
            color: "#FFFFFF",
            opacity: 0.48,
          }}
        >
          © 2022, All rights reserved - Metaversity Technologies Pvt. Ltd
        </footer>
      </Box>
    </div>
  )
}

export default Footer

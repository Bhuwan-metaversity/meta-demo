import React, { useState } from "react"
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material"
import { useFormik } from "formik"
import { Close } from "@mui/icons-material"
import { CallIcon } from "../images/call"

function RequestCallButton() {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      contact: "",
      question: "",
    },
    onSubmit: (values) => {
      fetch(process.env.STRAPI_API_URL + "/api/user-requests", {
        method: "POST",
        body: JSON.stringify({
          data: {
            name: values.name,
            contact: values.contact,
            question: values.question,
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    },
  })
  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle
          flexDirection={"row"}
          display="flex"
          justifyContent="space-between"
        >
          <Typography variant="h6">Request a Call</Typography>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              name="name"
              placeholder="Name"
              variant="outlined"
              fullWidth
              margin="dense"
              onChange={handleChange}
              value={values.name}
            />
            <TextField
              name="contact"
              placeholder="Contact"
              margin="dense"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              value={values.contact}
            />
            <TextareaAutosize
              value={values.question}
              onChange={handleChange}
              minRows={3}
              cols={30}
              name="question"
            />
            <Button type="submit" fullWidth sx={{ m: 5 }} variant="outlined">
              Submit Details
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        sx={{ px: 3, py: 1 }}
        startIcon={<CallIcon />}
      >
        {" "}
        Request a call
      </Button>
    </>
  )
}

export default RequestCallButton

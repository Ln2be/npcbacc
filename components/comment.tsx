import Box from "@mui/material/Box";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import FlagIcon from "@mui/icons-material/Flag";
import { Button, TextField } from "@mui/material";
import React from "react";

export interface Comment {
  article: string;
  name: "";
  value: "";
  like: 0;
  dislike: 0;
  report: 0;
}
function Comment({
  comments,
  article,
}: {
  comments: [Comment];
  article: string;
}) {
  const comment = {
    article: article,
    name: "",
    value: "",
    like: 0,
    dislike: 0,
    report: 0,
  };

  const commentsDelete = new Array(comments.length).fill(0);

  const handleSubmit = function () {
    fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "content-type": "application/json",
      },
    }).then((data) => {
      data.json().then((d) => {
        console.log(d);
      });
    });
  };

  const handleDelete = function (comment: Comment) {
    fetch("/api/delete", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "content-type": "application/json",
      },
    }).then((data) => {
      data.json().then((d) => {
        console.log(d);
      });
    });
  };

  return (
    <Box
      sx={{
        mt: 20,
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ mb: 2 }}>Commenter :</Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Nom"
            onChange={(text) => {
              comment.name = text.target.value;
            }}
          ></TextField>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            onChange={(text) => {
              comment.value = text.target.value;
            }}
            multiline
            rows={4}
            label="Commenteur"
            helperText="سواء كنت استاذا او تلميذا رأيك يهمنا"
          ></TextField>
        </Box>
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "flex-end",
          }}
        >
          <Button onClick={handleSubmit}>Envoyer</Button>
        </Box>
      </Box>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: 2 }}
      >
        {comments.map((comment, i) => {
          return (
            <Box key={i}>
              <Box>{comment.name}</Box>
              <Box
                onClick={() => {
                  console.log(commentsDelete[i]);
                  if (commentsDelete[i] == 5) handleDelete(comment);
                  else {
                    commentsDelete[i]++;
                  }
                }}
              >
                {comment.value}
              </Box>
              <Box>
                <ThumbUpIcon></ThumbUpIcon>
                <ThumbDownAltIcon></ThumbDownAltIcon>
                <FlagIcon></FlagIcon>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Comment;

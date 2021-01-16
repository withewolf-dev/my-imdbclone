import { Paper } from "@material-ui/core";
import React, { useRef } from "react";
import Carousel from "../components/utils/Carousel";

export default function git({ children }) {
  const scroller = useRef();

  const handleRightclick = () => {
    // scroller.current.scrollLeft() + 80
    scroller ? (scroller.current.scrollLeft += 840) : null;
  };

  const handleLeftClick = () => {
    scroller ? (scroller.current.scrollLeft -= 840) : null;
  };

  console.log(scroller);

  const arrowRight = (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current text-gray-200"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="presentation"
    >
      <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
    </svg>
  );

  const arrowLeft = (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current text-gray-200"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="presentation"
    >
      <path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path>
    </svg>
  );
  return (
    <>
      {/* <div className=" relative  w-mobileWidth lg:w-carousel">
      <div className=" hidden lg:flex lg:items-center lg:absolute  lg:inset-y-0 lg:left-0 ">
          <span onClick={handleLeftClick}>{arrowLeft}</span>
        </div>
        <div className="hidden lg:flex lg:items-center lg:absolute  lg:inset-y-0 lg:right-0 ">
          <span onClick={handleRightclick}>{arrowRight}</span>
        </div>
        <div className="flex no-scrollbar overflow-x-scroll">
         
          <div className="p-1">
            <Paper className="h-96 w-48  p-1">
              <div className="p-1 bg-gray-600">
                <img
                  src="https://images.unsplash.com/photo-1610616919576-ba52cd578baa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="title"
                  className="h-64 p-1"
                />
              </div>
              <div className="space-y-3 bg-gray-600 h-28">
                <h2>Rating</h2>
                <p>title</p>
                <p>title</p>
              </div>
            </Paper>
          </div>
          <div className="p-1">
            <Paper className="h-96 w-48  p-1">
              <div className="p-1 bg-gray-600">
                <img
                  src="https://images.unsplash.com/photo-1610616919576-ba52cd578baa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="title"
                  className="h-64 p-1"
                />
              </div>
              <div className="space-y-3 bg-gray-600 h-28">
                <h2>Rating</h2>
                <p>title</p>
                <p>title</p>
              </div>
            </Paper>
          </div>
          <div className="p-1">
            <Paper className="h-96 w-48  p-1">
              <div className="p-1 bg-gray-600">
                <img
                  src="https://images.unsplash.com/photo-1610616919576-ba52cd578baa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="title"
                  className="h-64 p-1"
                />
              </div>
              <div className="space-y-3 bg-gray-600 h-28">
                <h2>Rating</h2>
                <p>title</p>
                <p>title</p>
              </div>
            </Paper>
          </div>
          <div className="p-1">
            <Paper className="h-96 w-48  p-1">
              <div className="p-1 bg-gray-600">
                <img
                  src="https://images.unsplash.com/photo-1610616919576-ba52cd578baa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="title"
                  className="h-64 p-1"
                />
              </div>
              <div className="space-y-3 bg-gray-600 h-28">
                <h2>Rating</h2>
                <p>title</p>
                <p>title</p>
              </div>
            </Paper>
          </div>

          <div className="p-1">
            <Paper className="h-96 w-48  p-1">
              <div className="p-1 bg-gray-600">
                <img
                  src="https://images.unsplash.com/photo-1610616919576-ba52cd578baa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="title"
                  className="h-64 p-1"
                />
              </div>
              <div className="space-y-3 bg-gray-600 h-28">
                <h2>Rating</h2>
                <p>title</p>
                <p>title</p>
              </div>
            </Paper>
          </div>
          <div className="p-1">
            <Paper className="h-96 w-48  p-1">
              <div className="p-1 bg-gray-600">
                <img
                  src="https://images.unsplash.com/photo-1610616919576-ba52cd578baa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="title"
                  className="h-64 p-1"
                />
              </div>
              <div className="space-y-3 bg-gray-600 h-28">
                <h2>Rating</h2>
                <p>Titile</p>
                <p>id</p>
              </div>
            </Paper>
          </div>
        </div>
      </div> */}

      <Carousel>
      <div className="p-1">
            <Paper className="h-96 w-48  p-1">
              <div className="p-1 bg-gray-600">
                <img
                  src="https://images.unsplash.com/photo-1610616919576-ba52cd578baa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="title"
                  className="h-64 p-1"
                />
              </div>
              <div className="space-y-3 bg-gray-600 h-28">
                <h2>Rating</h2>
                <p>title</p>
                <p>title</p>
              </div>
            </Paper>
          </div>
          <div className="p-1">
            <Paper className="h-96 w-48  p-1">
              <div className="p-1 bg-gray-600">
                <img
                  src="https://images.unsplash.com/photo-1610616919576-ba52cd578baa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="title"
                  className="h-64 p-1"
                />
              </div>
              <div className="space-y-3 bg-gray-600 h-28">
                <h2>Rating</h2>
                <p>title</p>
                <p>title</p>
              </div>
            </Paper>
          </div>
          <div className="p-1">
            <Paper className="h-96 w-48  p-1">
              <div className="p-1 bg-gray-600">
                <img
                  src="https://images.unsplash.com/photo-1610616919576-ba52cd578baa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="title"
                  className="h-64 p-1"
                />
              </div>
              <div className="space-y-3 bg-gray-600 h-28">
                <h2>Rating</h2>
                <p>title</p>
                <p>title</p>
              </div>
            </Paper>
          </div>
          <div className="p-1">
            <Paper className="h-96 w-48  p-1">
              <div className="p-1 bg-gray-600">
                <img
                  src="https://images.unsplash.com/photo-1610616919576-ba52cd578baa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="title"
                  className="h-64 p-1"
                />
              </div>
              <div className="space-y-3 bg-gray-600 h-28">
                <h2>Rating</h2>
                <p>title</p>
                <p>title</p>
              </div>
            </Paper>
          </div>
          <div className="p-1">
            <Paper className="h-96 w-48  p-1">
              <div className="p-1 bg-gray-600">
                <img
                  src="https://images.unsplash.com/photo-1610616919576-ba52cd578baa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="title"
                  className="h-64 p-1"
                />
              </div>
              <div className="space-y-3 bg-gray-600 h-28">
                <h2>Rating</h2>
                <p>title</p>
                <p>title</p>
              </div>
            </Paper>
          </div>
          <div className="p-1">
            <Paper className="h-96 w-48  p-1">
              <div className="p-1 bg-gray-600">
                <img
                  src="https://images.unsplash.com/photo-1610616919576-ba52cd578baa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="title"
                  className="h-64 p-1"
                />
              </div>
              <div className="space-y-3 bg-gray-600 h-28">
                <h2>Rating</h2>
                <p>title</p>
                <p>title</p>
              </div>
            </Paper>
          </div>
          <div className="p-1">
            <Paper className="h-96 w-48  p-1">
              <div className="p-1 bg-gray-600">
                <img
                  src="https://images.unsplash.com/photo-1610616919576-ba52cd578baa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="title"
                  className="h-64 p-1"
                />
              </div>
              <div className="space-y-3 bg-gray-600 h-28">
                <h2>Rating</h2>
                <p>title</p>
                <p>title</p>
              </div>
            </Paper>
          </div>
          <div className="p-1">
            <Paper className="h-96 w-48  p-1">
              <div className="p-1 bg-gray-600">
                <img
                  src="https://images.unsplash.com/photo-1610616919576-ba52cd578baa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="title"
                  className="h-64 p-1"
                />
              </div>
              <div className="space-y-3 bg-gray-600 h-28">
                <h2>Rating</h2>
                <p>title</p>
                <p>title</p>
              </div>
            </Paper>
          </div>
          <div className="p-1">
            <Paper className="h-96 w-48  p-1">
              <div className="p-1 bg-gray-600">
                <img
                  src="https://images.unsplash.com/photo-1610616919576-ba52cd578baa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="title"
                  className="h-64 p-1"
                />
              </div>
              <div className="space-y-3 bg-gray-600 h-28">
                <h2>Rating</h2>
                <p>title</p>
                <p>title</p>
              </div>
            </Paper>
          </div>
          <div className="p-1">
            <Paper className="h-96 w-48  p-1">
              <div className="p-1 bg-gray-600">
                <img
                  src="https://images.unsplash.com/photo-1610616919576-ba52cd578baa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="title"
                  className="h-64 p-1"
                />
              </div>
              <div className="space-y-3 bg-gray-600 h-28">
                <h2>Rating</h2>
                <p>title</p>
                <p>title</p>
              </div>
            </Paper>
          </div>
          <div className="p-1">
            <Paper className="h-96 w-48  p-1">
              <div className="p-1 bg-gray-600">
                <img
                  src="https://images.unsplash.com/photo-1610616919576-ba52cd578baa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="title"
                  className="h-64 p-1"
                />
              </div>
              <div className="space-y-3 bg-gray-600 h-28">
                <h2>Rating</h2>
                <p>title</p>
                <p>title</p>
              </div>
            </Paper>
          </div>
          <div className="p-1">
            <Paper className="h-96 w-48  p-1">
              <div className="p-1 bg-gray-600">
                <img
                  src="https://images.unsplash.com/photo-1610616919576-ba52cd578baa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="title"
                  className="h-64 p-1"
                />
              </div>
              <div className="space-y-3 bg-gray-600 h-28">
                <h2>Rating</h2>
                <p>title</p>
                <p>title</p>
              </div>
            </Paper>
          </div>
      </Carousel>
    </>
  );
}

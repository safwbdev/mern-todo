import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v1 as uuid } from "uuid";

class ToDoList extends Component {
  state = {
    items: [
      { id: uuid(), name: "Eggs" },
      { id: uuid(), name: "Milk" },
      { id: uuid(), name: "Pankcakes" },
      { id: uuid(), name: "OJ" },
    ],
  };

  render() {
    const { items } = this.state;

    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2em" }}
          onClick={() => {
            const name = prompt("Enter Item");
            if (name) {
              this.setState((state) => ({
                items: [...state.items, { id: uuid, name: name }],
              }));
            }
          }}
        >
          Add Item
        </Button>
        <ListGroup>
          <TransitionGroup className="todo-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState((state) => ({
                        items: state.items.filter((item) => item.id !== id),
                      }));
                    }}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}
export default ToDoList;

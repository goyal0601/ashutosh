import { Button, Checkbox, Input, List, ListItem } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import styles from './ToDoList.scss';
import classNames from 'classnames';
import moment from 'moment';

const ToDoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [editableId, setEditableId] = useState(null);
  const inputRef = useRef();
  const inputEditRef = useRef();

  const onSaveNew = () => {
    setTodoList(prev => [
      ...prev,
      { id: moment().format('x'), item: inputRef.current.value, checked: false }
    ]);
  };

  const keyPress = e => {
    if (e.key === 'Enter') {
      onSaveNew();
    }
  };

  const onDeleteList = id => {
    setTodoList(prev => prev.filter(pr => pr.id !== id));
  };

  const onSelectEdit = id => {
    setEditableId(id);
  };

  useEffect(() => {
    const editableList = todoList.find(list => list.id === editableId);
    if (editableId && inputEditRef.current) {
      inputEditRef.current.focus();
      inputEditRef.current.value = editableList.item;
    }
  }, [editableId, todoList]);

  const onEditSave = () => {
    setTodoList(prev =>
      prev.map(pr => {
        if (pr.id === editableId) {
          return { ...pr, item: inputEditRef.current.value };
        }
        return pr;
      })
    );
    setEditableId(null);
  };

  const keyPressEdit = e => {
    if (e.key === 'Enter') {
      onEditSave();
    }
  };

  const onAction = e => {
    const id = e.target.getAttribute('data-id');
    const action = e.target.getAttribute('data-action');

    if (!id || !action) return;

    if (action === 'delete') {
      onDeleteList(id);
    }

    if (action === 'edit' || (e.type === 'dblclick' && action === 'text')) {
      onSelectEdit(id);
    }

    if (action === 'edit-save') {
      onEditSave();
    }
  };

  const checkUnCheckList = (id, checked) => {
    setTodoList(prev =>
      prev.map(pr => {
        if (pr.id === id) {
          return { ...pr, checked: checked };
        }
        return pr;
      })
    );
  };

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.value = '';
  }, [todoList]);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ margin: '0px auto' }}>
        <div className={classNames(styles.inputBox, styles.flexCenter)}>
          <Input
            onKeyDown={keyPress}
            ref={inputRef}
            style={{ width: '400px' }}
          />
          <Button onClick={onSaveNew}>Save</Button>
        </div>
        {todoList.length > 0 && (
          <div onClick={onAction} onDoubleClick={onAction}>
            <List>
              {todoList.map(list => (
                <>
                  {editableId === list.id ? (
                    <div
                      className={classNames(styles.inputBox, styles.flexCenter)}
                    >
                      <Input
                        onKeyDown={keyPressEdit}
                        ref={inputEditRef}
                        style={{ width: '400px' }}
                      />
                      <Button data-action="edit-save" data-id={list.id}>
                        Save
                      </Button>
                    </div>
                  ) : (
                    <div
                      style={{ display: 'flex', alignItems: 'center' }}
                      key={list.id}
                    >
                      <Checkbox
                        checked={list.checked}
                        onChange={e => {
                          checkUnCheckList(list.id, e.target.checked);
                        }}
                      />
                      <ListItem
                        style={{
                          width: '400px',
                          overflowWrap: 'break-word',
                          paddingLeft: '10px'
                        }}
                      >
                        {list.checked ? (
                          <s>{list.item}</s>
                        ) : (
                          <div data-action="text" data-id={list.id}>
                            {list.item}
                          </div>
                        )}
                      </ListItem>
                      <Button data-action="edit" data-id={list.id}>
                        Edit
                      </Button>
                      <Button data-action="delete" data-id={list.id}>
                        Delete
                      </Button>
                    </div>
                  )}
                </>
              ))}
            </List>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToDoList;

import React from 'react';
import { InputGroup,FormControl } from 'react-bootstrap';
import Rate from './Rate';
import { useState } from 'react';

export default function Filter({setsearch}) {
  
  return( 
  <div>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"><i class="fa fa-search"></i></InputGroup.Text>
    <FormControl
      placeholder="search by title"
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={(e)=>setsearch(e.target.value)}
    />
  </InputGroup>
  <Rate/>
  </div>
  );
}

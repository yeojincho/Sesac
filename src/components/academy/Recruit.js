import React from "react";
import "./Recruit.css";
import { Label, FormGroup, Input, Button, Form, Col } from "reactstrap";
function Recruit() {
  return (
    <div className='recruit-wrap inner-box'>
      <h3 className='recruit-header'>
        <b>인재채용안내</b>
      </h3>
      <span className='recruit-span'>
        엑스퍼트 아카데미는 실력있는 강사님과 매니저를 선발합니다.
      </span>
      <div className='recruit-Contents'>
        <img className='recruit-lectureImg' src={"/images/lecture1.png"} />
        <Form>
          <FormGroup row className='recruit-TextBox'>
            <Label for='apply' sm={2} className='recruit-subTitle'>
              지원자명
            </Label>
            <Col sm={10}>
              <Input id='apply' name='apply' placeholder='name' type='text' />
            </Col>
          </FormGroup>
          <FormGroup row className='TextBox'>
            <Label for='examplePassword' sm={2} className='subTitle'>
              연락처
            </Label>
            <Col sm={10}>
              <Input
                id='examplePassword'
                name='password'
                placeholder='phone number'
                type='text'
              />
            </Col>
          </FormGroup>
          <FormGroup row className='recruit-TextBox'>
            <Label for='examplePassword' sm={2} className='recruit-subTitle'>
              E-mail
            </Label>
            <Col sm={10}>
              <Input
                id='examplePassword'
                name='password'
                placeholder='email'
                type='email'
              />
            </Col>
          </FormGroup>
          <FormGroup row className='recruit-TextBox'>
            <Label for='examplePassword' sm={2} className='recruit-subTitle'>
              주요역량
            </Label>
            <Col sm={10}>
              <Input
                id='examplePassword'
                name='password'
                placeholder='text'
                type='text'
              />
            </Col>
          </FormGroup>
          <FormGroup row tag='fieldset' className='recruit-TextBox'>
            <legend className='col-form-label col-sm-2 subTitle'>
              지원분야
            </legend>
            <Col sm={10}>
              <FormGroup className='recruit-FormGroup' check>
                <Input name='radio2' type='radio' /> <Label check>강사</Label>
              </FormGroup>
              <FormGroup check>
                <Input name='radio2' type='radio' /> <Label check>매니저</Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row className='recruit-TextBox'>
            <Label for='checkbox2' sm={2} className='subTitle'>
              Checkbox
            </Label>
            <Col
              sm={{
                size: 10,
              }}
            >
              <FormGroup check>
                <Input id='checkbox2' type='checkbox' />{" "}
                <Label check>Check me out</Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col
              sm={{
                offset: 2,
                size: 10,
              }}
            >
              <Button className='recruit-submitBtn'>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}
export default Recruit;

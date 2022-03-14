import React from "react";
import "./Partnership.css";

import { Label, FormGroup, Input, Button, Form, FormText } from "reactstrap";
function Partnership() {
  return (
    <div className='inner-box Partnership-wrap'>
      <h3>
        <b>제휴제안</b>
      </h3>
      <span className='Partnership-span'>
        엑스퍼트 아카데미는 제휴제안을 환영합니다.
      </span>
      <div>
        <img className='Partnership-companyImg' src={"/images/company.png"} />
      </div>
      <Form>
        <FormGroup className='Partnership-FormGroup'>
          <Label className='Partnership-topTitle' for='title'>
            제목
          </Label>
          <Input
            id='titleId'
            name='titleName'
            placeholder='with a title'
            type='text'
          />
        </FormGroup>
        <FormGroup className='Partnership-FormGroup'>
          <Label for='company'>회사</Label>
          <Input
            id='companyId'
            name='companyName'
            placeholder='with a company name'
            type='text'
          />
        </FormGroup>
        <FormGroup className='Partnership-FormGroup'>
          <Label className='Partnership-Label' for='agency'>
            기관명
          </Label>
          <Input
            id='agencyId'
            name='agencyName'
            placeholder='with a agency name'
            type='text'
          />
        </FormGroup>
        <FormGroup className='Partnership-FormGroup'>
          <Label className='Partnership-Label' for='examplePassword'>
            제안자명
          </Label>
          <Input
            id='proposalId'
            name='proposalName'
            placeholder='with a proposal'
            type='text'
          />
        </FormGroup>
        <FormGroup className='Partnership-FormGroup'>
          <Label className='Partnership-Label' for='examplePassword'>
            연락처
          </Label>
          <Input
            id='phoneId'
            name='phoneName'
            placeholder='with a phone number'
            type='text'
          />
        </FormGroup>
        <FormGroup className='Partnership-FormGroup'>
          <Label className='Partnership-Label' for='examplePassword'>
            e-mail
          </Label>
          <Input
            id='emailId'
            name='emailName'
            placeholder='with a e-mail'
            type='text'
          />
        </FormGroup>
        <FormGroup className='Partnership-FormGroup'>
          <Label className='Partnership-Label' for='exampleText'>
            제안내용
          </Label>
          <Input id='exampleText' name='text' type='textarea' />
        </FormGroup>
        <FormGroup className='Partnership-FormGroup'>
          <Label className='Partnership-Label' for='exampleFile'>
            제안서첨부
          </Label>
          <Input id='exampleFile' name='file' type='file' />
          <FormText>
            첨부된 제안서는 돌려드리지 않습니다. 주의하시기 바랍니다.
          </FormText>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}
export default Partnership;

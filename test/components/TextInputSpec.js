import React from 'react/addons';
import TextInput from 'components/TextInput';
import checking from 'checkers/mocha';
import { expect } from 'chai';
import sd from 'skin-deep';

const gen = checking.gen;

describe('TextInput', () => {
  it('should render a ReactElement', () => {
    const tree = sd.shallowRender(<TextInput className="foo" defaultValue="Title" />);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.have.property('type', 'input');
    expect(vdom.props).to.have.property('defaultValue', 'Title');
    expect(vdom.props).to.have.property('className').to.contain('form-control');
  });
});

describe('TextInputProperties', () => {
  checking('.charAlphanum', [gen.charAlphanum], (s) => {
    const tree = sd.shallowRender(<TextInput defaultValue={s} />);
    const vdom = tree.getRenderOutput();
    return vdom.props.defaultValue === s;
  }, 100);
});
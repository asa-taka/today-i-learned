import * as React from 'react';
import { FormikProps, connect } from 'formik';
import debounce from 'lodash.debounce';
import isEqual from 'react-fast-compare';

export interface PersistProps {
  name: string;
  debounce?: number;
  isSessionStorage?: boolean;
}

class PersistImpl extends React.Component<
  PersistProps & { formik: FormikProps<any> },
  {}
> {
  static defaultProps = {
    debounce: 300,
  };

  saveForm = debounce((data: FormikProps<{}>) => {
    window.localStorage.setItem(this.props.name, JSON.stringify(data));
  }, this.props.debounce);

  componentDidUpdate(prevProps: PersistProps & { formik: FormikProps<any> }) {
    console.log(this.props.formik)
    if (!isEqual(prevProps.formik, this.props.formik)) {
      this.saveForm(this.props.formik);
    }
  }

  componentDidMount() {
    const maybeState = window.localStorage.getItem(this.props.name);
    if (maybeState && maybeState !== null) {
      this.props.formik.setFormikState(JSON.parse(maybeState));
    }
    console.log('mounted', this.props.formik)
  }

  render() {
    return null;
  }
}

export const Persist = connect<PersistProps, any>(PersistImpl);

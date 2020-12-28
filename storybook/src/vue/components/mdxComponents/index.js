import s from '../../../react/components/mdxComponents/index.scss';

export default {
  h1: props=> ({
    render() {
      return <h1 {...props} class={s.h1}>{this.$slots.default}</h1>;
    }
  }),
  h2: props=> ({
    render() {
      return <h2 {...props} class={s.h2}>{this.$slots.default}</h2>;
    }
  }),
  p: props=> ({
    render() {
      return <p {...props} class={s.p}>{this.$slots.default}</p>;
    }
  }),
  inlineCode: props=> ({
    render() {
      return <code {...props} class={s.code}>{this.$slots.default}</code>;
    }
  }),
  code: ()=> ({
    render() {
      return <div>{this.$slots.default}</div>;
    }
  })
};

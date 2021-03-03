<script>
  import Guide from './Guide';
  import s from '../../../common/Input/index.scss';

  export default {
    name: 'l-input',
    Guide,
    props: {
      variant: { type: String, default: 'line' },
      label: { type: String, default: '' },
      type: String,
      value: String
    },
    methods: {
      onFocus() {
        this.focus = true
        this.$emit('focus')
      },
      onBlur() {
        this.focus = false
        this.$emit('blur')
      }
    },
    data: ()=> ({
      s,
      focus: false
    })
  }
</script>

<template>
  <div
    v-if="variant === 'line'"
    ref="input"
    :class="[s.inputLine, {
      [s.inputValue]: !!value,
      [s.inputFocus]: focus
    }]"
  >
    <label :class="s.inputLabel">
      {{label}}
    </label>
    <input
      :type="type"
      :value="value"
      :class="s.input"
      autocomplete="new-password"
      @input="$emit('input', $event)"
      @focus="onFocus"
      @blur="onBlur"
    />
  </div>

  <div
    ref="ref"
    v-else="variant === 'outline'"
    :class="[s.inputOutline, {
      [s.inputValue]: !!value,
      [s.inputFocus]: focus
    }]"
  >
    <fieldset :class="s.inputOutlineFieldset">
      <legend :class="s.inputLegend">{{label}}</legend>
    </fieldset>
    <label :class="s.inputLabel">{{label}}</label>
    <input
      :type="type"
      :value="value"
      :class="s.input"
      autocomplete="new-password"
      @input="$emit('input', $event)"
      @focus="onFocus"
      @blur="onBlur"
    />
  </div>
</template>

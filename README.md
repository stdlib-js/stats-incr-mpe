<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrmpe

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [mean percentage error][mean-percentage-error] (MPE) incrementally.

<section class="intro">

The [mean percentage error][mean-percentage-error] is defined as

<!-- <equation class="equation" label="eq:mean_percentage_error" align="center" raw="\operatorname{MPE}  = \frac{100}{n} \sum_{i=0}^{n-1} \frac{a_i - f_i}{a_i}" alt="Equation for the mean percentage error."> -->

<div class="equation" align="center" data-raw-text="\operatorname{MPE}  = \frac{100}{n} \sum_{i=0}^{n-1} \frac{a_i - f_i}{a_i}" data-equation="eq:mean_percentage_error">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@2acedf866c9a4f1353af22f95780535612c5ee06/lib/node_modules/@stdlib/stats/incr/mpe/docs/img/equation_mean_percentage_error.svg" alt="Equation for the mean percentage error.">
    <br>
</div>

<!-- </equation> -->

where `f_i` is the forecast value and `a_i` is the actual value.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import incrmpe from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mpe@esm/index.mjs';
```

#### incrmpe()

Returns an accumulator `function` which incrementally computes the [mean percentage error][mean-percentage-error].

```javascript
var accumulator = incrmpe();
```

#### accumulator( \[f, a] )

If provided input values `f` and `a`, the accumulator function returns an updated [mean percentage error][mean-percentage-error]. If not provided input values `f` and `a`, the accumulator function returns the current [mean percentage error][mean-percentage-error].

```javascript
var accumulator = incrmpe();

var m = accumulator( 2.0, 3.0 );
// returns ~33.33

m = accumulator( 1.0, 4.0 );
// returns ~54.17

m = accumulator( 3.0, 5.0 );
// returns ~49.44

m = accumulator();
// returns ~49.44
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   Be careful when interpreting the [mean percentage error][mean-percentage-error] as errors can cancel. This stated, that errors can cancel makes the [mean percentage error][mean-percentage-error] suitable for measuring the bias in forecasts. 
-   **Warning**: the [mean percentage error][mean-percentage-error] is **not** suitable for intermittent demand patterns (i.e., when `a_i` is `0`). Interpretation is most straightforward when actual and forecast values are positive valued (e.g., number of widgets sold). 

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import incrmpe from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mpe@esm/index.mjs';

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrmpe();

// For each simulated datum, update the mean percentage error...
for ( i = 0; i < 100; i++ ) {
    v1 = ( randu()*100.0 ) + 50.0;
    v2 = ( randu()*100.0 ) + 50.0;
    accumulator( v1, v2 );
}
console.log( accumulator() );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/incr/mape`][@stdlib/stats/incr/mape]</span><span class="delimiter">: </span><span class="description">compute the mean absolute percentage error (MAPE) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/me`][@stdlib/stats/incr/me]</span><span class="delimiter">: </span><span class="description">compute the mean error (ME) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmpe`][@stdlib/stats/incr/mmpe]</span><span class="delimiter">: </span><span class="description">compute a moving mean percentage error (MPE) incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-mpe.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-mpe

[test-image]: https://github.com/stdlib-js/stats-incr-mpe/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-incr-mpe/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-mpe/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-mpe?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-mpe.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-mpe/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-mpe/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-incr-mpe/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-incr-mpe/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-incr-mpe/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-mpe/main/LICENSE

[mean-percentage-error]: https://en.wikipedia.org/wiki/Mean_percentage_error

<!-- <related-links> -->

[@stdlib/stats/incr/mape]: https://github.com/stdlib-js/stats-incr-mape/tree/esm

[@stdlib/stats/incr/me]: https://github.com/stdlib-js/stats-incr-me/tree/esm

[@stdlib/stats/incr/mmpe]: https://github.com/stdlib-js/stats-incr-mmpe/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->

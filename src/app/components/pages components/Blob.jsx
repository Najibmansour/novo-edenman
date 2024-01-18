import * as React from "react";
const Blob = (props) => (
  <div {...props}>
    {props.variant == 1 ? (
      <svg viewBox="190 90 740 725" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="a">
            <path
              fill="currentColor"
              d="M830 568.5q-141 68.5-180.5 169T510 807q-100-31-143-105T267 564q-57-64-66.5-176.5t70.5-230Q351 40 465 149t246.5 105q132.5-4 196 121T830 568.5Z"
            />
          </clipPath>
        </defs>
        <g clipPath="url(#a)">
          <path
            fill={props.color}
            d="M830 568.5q-141 68.5-180.5 169T510 807q-100-31-143-105T267 564q-57-64-66.5-176.5t70.5-230Q351 40 465 149t246.5 105q132.5-4 196 121T830 568.5Z"
          />
        </g>
      </svg>
    ) : props.variant == 2 ? (
      <svg viewBox="90 70 790 690" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="a">
            <path
              fill="currentColor"
              d="M812.5 576.5Q710 653 651 717.5t-130 1Q450 655 392 638t-214.5-77.5Q21 500 161.5 428T344 252.5Q386 149 518 94t193 76.5Q772 302 843.5 401t-31 175.5Z"
            />
          </clipPath>
        </defs>
        <g clipPath="url(#a)">
          <path
            fill={props.color}
            d="M812.5 576.5Q710 653 651 717.5t-130 1Q450 655 392 638t-214.5-77.5Q21 500 161.5 428T344 252.5Q386 149 518 94t193 76.5Q772 302 843.5 401t-31 175.5Z"
          />
        </g>
      </svg>
    ) : props.variant == 3 ? (
      <svg viewBox="90 250 690 670" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="a">
            <path
              fill="currentColor"
              d="M753 604q34 104-34 232.5T523.5 893Q396 821 312 759.5T162 599q-66-99-55.5-238T284 285.5Q451 349 509 322t177.5-35.5Q806 278 762.5 389T753 604Z"
            />
          </clipPath>
        </defs>
        <g clip-path="url(#a)">
          <path
            fill={props.color}
            d="M753 604q34 104-34 232.5T523.5 893Q396 821 312 759.5T162 599q-66-99-55.5-238T284 285.5Q451 349 509 322t177.5-35.5Q806 278 762.5 389T753 604Z"
          />
        </g>
      </svg>
    ) : props.variant == 4 ? (
      <svg viewBox="90 190 705 650" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="a">
            <path
              fill="currentColor"
              d="M733.5 574Q704 648 665 768.5T532 790q-94-99-157-126.5T178.5 568Q45 500 153 413t202-79q94 8 173.5-79t182-35Q813 272 788 386t-54.5 188Z"
            />
          </clipPath>
        </defs>
        <g clipPath="url(#a)">
          <path
            fill={props.color}
            d="M733.5 574Q704 648 665 768.5T532 790q-94-99-157-126.5T178.5 568Q45 500 153 413t202-79q94 8 173.5-79t182-35Q813 272 788 386t-54.5 188Z"
          />
        </g>
      </svg>
    ) : null}
  </div>
);
export default Blob;

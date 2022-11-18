import { SVGProps } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare const SvgD3Js: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => JSX.Element;
export default SvgD3Js;

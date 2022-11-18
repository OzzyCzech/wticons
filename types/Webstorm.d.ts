import { SVGProps } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare const SvgWebstorm: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => JSX.Element;
export default SvgWebstorm;

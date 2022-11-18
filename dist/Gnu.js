var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
var SvgGnu = function (_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "#fff", d: "M91.5 309c0-.003-28.314 6.296-28.314 6.296l16.697-25.935L99 245.989l-57.206-24.938-35.133-55.378-4.354-70.08L28.872 40.44l55.37-34.065 68.908-3.624 42.012 21.16 23.806 1.565-18.069 16.78L145.9 36.7 97.048 49.861 69.59 81.336l-8.896 44.115 18.137 33.262 24.86 2.964 88.371-87.884 46.408-6.425 45.961 26.041 20.682-15.871 30.705-10.457 37.615 12.75 62.867 75.885 22.8 4.236L478 134.48 476.231 88l-25.412-36.269L415.2 39.7l-28.816 5.001-35.984-2.85-5.1-11.351 29.8-11.7L399 6.7l36.6-2.484L489.5 25.2l37.9 52.5 4.9 74.5-32.7 60.6-46 23.1 1.2 17.7 12.8 1.6-5.3 11.9-29.9 1.1-57.6-25.5 8.3 34.6h28.3l8.4 29.3-28.3 33.1 15.3 18.2-19.5 18.2-3 27.7-39.4 11.6 9.6 31-61.1 54.8-41.95-52.2-30.222-2.595 8.613-30.996-34.502-15.849.604-23.394-23.883-23.732-18.866-65.334L91.5 308.997V309z" }),
        React.createElement("path", { d: "M112.993 304.372c-3.634.247-8.365 1.875-11.539 7.564-2.591 4.646-8.661 5.387-11.495 4.451-4.721-1.56-10.755-2.642-16.6 1.523-5.845 4.164-12.157 1.015-11.05-6.576 1.107-7.59 3.849-14.351 11.127-18.538 15.895-9.144 4.848-15.508 13.572-24.685 8.741-9.195 6.81-12.009 6.52-24.497-29.543-4.438-46.287-12.953-64.984-36.313C9.847 183.94 2.599 164.711.661 135.423c-1.938-29.288-.258-48.269 12.396-72.58S39.034 26.829 62.122 14.69C85.21 2.553 107.832-.354 128.742 0c20.91.353 34.843 1.885 46.658 8.626 11.814 6.741 22.622 15.224 29.512 15.285 6.891.061 11.582-1.744 14.931-4.31.894 22.703-19.539 24.675-37.819 25.155-18.281.479-29.514-7.083-46.351-4.27S91.269 50.961 77.84 74.336s-13.887 31.638-12.771 51.24c1.116 19.603 17.988 34.228 27.512 34.387 9.523.159 11.649-2.599 19.985-8.036 8.337-5.438 50.896-58.122 65.418-69.956 14.523-11.834 28.854-15.488 44.328-15.678 15.474-.19 19.428.335 31.908 5.45 12.48 5.114 20.149 14.533 30.211 20.291 5.143-3.027 8.338-7.547 13.057-10.996 16.877-12.335 25.646-15.659 45.705-13.707 11.529 1.122 26.066 7.708 34.74 15.25 15.445 13.429 28.205 32.125 38.516 46.328 8.029 11.061 17.477 24.295 30.965 28.432 14.727 4.515 25.809-14.559 27.436-25.139.922-5.995 2.125-11.249 2.135-17.847.01-6.599-.664-14.607-2.566-21.484s-5.16-13.72-8.688-19.394c-5.742-9.235-15.137-18.899-24.912-23.871-5.486-2.79-18.393-7.863-26.529-8.041-9.969-.216-17.564 3.133-26.781 3.761-11.156.761-31.084 3.269-39.83-5.35-5.566-5.485-6.266-9.144-7.217-16.296 2.459 2.026 5.898 3.358 8.959 3.617 6.986.59 13.527-5.114 19.166-8.419 4.645-2.723 11.223-7.589 17.324-10.048 15.676-6.32 34.932-6.138 51.48-4.445 13.264 1.356 30.461 7.257 42.094 13.84 11.688 6.612 22.951 17.761 31.201 28.271 10.379 13.224 16.053 24.57 19.812 41.063 4.805 21.062 6.137 52.702.328 73.469-4.578 16.365-19.779 41.504-32.719 53.827-12.762 12.155-27.498 18.022-44.256 21.231.656 3.382.764 6.536 1.631 9.309 1.232 3.936 3.588 8.324 8.428 6.936 1.93-.553 2.963-1.032 5.508 1.194 2.543 2.226 1.219 10.825-5.938 14.684-3.629 1.957-7.459 2.382-13.271 2.498s-14.883.141-21.193-.964c-6.309-1.104-10.078-6.111-17.066-6.895-10.799-1.208-19.068-9.01-27.727-14.59-3.613-2.329-4.832-2.353-6.914-3.53 1.125 3.444 2.625 7.021 3.373 10.332.75 3.311.43 6.378.828 9.028.396 2.648 1.131 4.707 1.559 6.855 1.73 1.547 2.283 3.9 5.189 4.64 2.908.739 7.461-.412 10.436-.812s4.969-2.021 7.303-1.577c2.336.443 4.549 2.115 6.506 3.682s3.639 1.796 5.223 5.706 3.037 11.917 3.254 17.269-.383 10.183-1.969 14.43-2.98 6.13-7.275 10.336c-4.295 4.207-11.289 10.38-18.268 14.68 1.285 1.903 1.855 3.645 3.859 5.71 2.004 2.066 6.182 4.381 8.041 6.56 1.857 2.179 2.799 3.742 2.826 6.186.029 2.443-.09 5.619-2.074 8.283-4.941 6.633-10.785 7.821-17.891 10.941 1.195 7.462 2.17 12.793.443 20.244-.705 3.036-2.271 9.92-6.016 11.686-3.746 1.766-10.969.911-15.541 1.637-4.572.727-7.131 1.417-10.695 2.125-2.166 3.131-5.391 6.586-6.496 9.392-1.107 2.807-.773 3.813.156 6.679s4.092 7.039 4.988 10.395 1.07 6.969.234 10.334c-.838 3.365-2.271 5.807-5.139 8.795-2.867 2.989-8.508 5.336-11.318 7.758-2.812 2.423-5.611 2.714-4.844 6.723 1.055 5.506 9.1 14.436 14.92 16.562 3.488 1.275 8.17.873 12.406-.915-.287 4.703-4.357 7.873-7.016 10.996 7.201-2.059 14.184-6.001 19.014-11.226-1.498 4.538-6.652 11.823-14.361 18.22-7.709 6.397-7.662 5.088-11.494 7.633 6.992 1.405 13.494 1.025 18.91.052-2.969 1.637-7.836 3.939-14.283 4.616-6.447.676-10.422.198-16.232-1.213-5.811-1.412-11.115-6.694-18.156-10.335.686 2.612 1.174 5.753 4.135 8.439s7.441 4.052 12.203 6.375c-6.062-.688-12.432-.896-18.389-2.209-4.41-.973-7.373-2.005-10.6-3.603-3.225-1.598-5.715-3.929-8.572-5.893 1.369 2.615 1.775 5.691 4.105 7.847s6.117 2.959 9.18 4.44c-3.195-.07-6.268.623-9.58-.21-3.314-.833-6.422-2.142-9.867-4.68s-6.998-5.663-9.938-8.858c-2.938-3.195-6.566-7.337-7.664-10.283-1.1-2.947.66-5.008.99-7.509-2.029 1.333-4.525 2.067-6.084 4.002s-2.941 3.702-2.251 7.075c.691 3.373 3.804 7.496 6.005 11.248-6.568-5.371-10.236-7.439-11.799-13.918-1.463-6.066 2.322-11.572 5.199-16.159 1.429-2.278 3.567-4.398 4.903-6.597-2.967-2.903-6.358-5.398-8.901-8.709-2.542-3.31-3.61-7.79-6.205-10.957-2.596-3.168-6.088-5.173-9.129-7.756 2.673 5.742 7.066 12.785 8.02 17.229.953 4.444-1.069 7.164-2.646 9.563-1.578 2.399-4.124 2.934-6.539 4.408-2.415 1.475-6.171.312-7.61 2.501-1.438 2.188-1.824 5.48-.449 7.648l5.64 8.902c-2.078-1.049-5.658-4.1-7.272-6.264s-4.09-4.163-4.429-7.089c-.339-2.925-.504-5.464 1.391-8.07 1.896-2.605 7.086-3.477 9.409-5.48 2.323-2.003 3.626-3.307 3.493-5.896-.132-2.589-2.661-4.441-4.835-6.073-6.637-4.978-15.151-9.565-20.787-15.565-3.184-3.39-4.712-6.127-5.352-8.466-.639-2.338.037-4.162 1.619-7.038 1.582-2.877 7.007-6.718 7.667-9.843.659-3.124-2.081-3.795-4.554-4.897s-7.17.565-9.464-1.352c-2.293-1.917.674-5.945-1.911-8.154-2.584-2.209-8.499-.976-11.552-3.352-3.053-2.377-4.315-5.327-5.367-8.775s-1.171-7.225-.458-9.722 2.855-2.934 4.147-4.228 2.413-2.367.691-4.297c-1.722-1.929-7.365.108-10.609-2.369-3.244-2.477-1.258-8.41-3.552-10.911-2.293-2.501-6.409-1.522-8.581-2.321-2.171-.799-3.023 2.02-4.355-2.438-1.332-4.459-1.368-17.75-3.16-22.71s-5.311-.335-6.945-5.265c-1.634-4.929-.085-12.812-.821-20.257l-3.335-20.257c-11.634 7.815-19.314 10.269-31.813 12.477-1.043 30.582-3.916 48.591 6.464 82.52 10.38 33.928 31.387 53.924 59.726 82.649-37.395-28.016-55.248-50.792-66.422-79.97-11.176-29.182-9.03-53.586-7.906-81.686zm198.708-12.292c2.877.129 6.373.859 8.393 2.171 2.021 1.312 4.166 2.384 6 4.251 4.576 4.66 8.008 10.28 9.525 16.738.967 4.117 1.111 9.397 1.463 14.231-1.385-4.468-2.316-9.127-4.289-13.13-3.111-6.312-8.396-12.473-14.959-15.31-2.166-.938-3.611-.764-4.803-.598.533.895 1.426 1.645 1.465 2.956s-.254 3.876-2.477 4.954c-3.584 1.739-7.568.516-10.336-1.931-2.791-2.466-3.742-6.638-2.281-10.223 1.741-4.272 8.375-4.283 12.299-4.109zM275.629 286c.361-7.345 3.012-13.539 9.594-17.141 3.404-1.862 8.648-4.27 13.467-4.836 4.629-.543 15.889-.146 22.662 2.945 5.201 2.374 8.744 6.07 13.311 8.771 4.566 2.702 7.814 4.513 12.162 7.543 6.674 4.651 10.586 9.772 15.213 12.842 2.225 1.475 5.355 1.256 8.309 2.158-2.297.682-5.299 1.434-7.777.642-3.09-.988-7.41-3.813-9.807-5.838-4.236-3.578-6.432-5.324-11.055-8.023-2.76-1.608-7.305-3.503-10.338-5.481-3.035-1.978-8.303-6.318-11.219-7.787-3.707-1.866-10.381-2.904-14.508-2.783-5.686.166-13.916 1.104-18.316 5.096-4.371 3.968-6.031 7.459-5.045 12.612 1.646-1.896 2.742-4.278 4.391-5.688 3.416-2.918 7.336-3.059 11.588-2.506 4.777.622 7.182 3.381 8.76 7.916-1.062-.78-3.014-2.493-4.555-3.024-3.617-1.248-6.352-.864-9.74.953-4 2.146-2.912 5.322-3.488 8.854-.264 1.629-.879 2.941-1.318 4.412-1.504-.398-2.895-1.024-4.033-2.152.047 1.65-.193 3.093.145 4.949.336 1.855 1.24 4.059 1.859 6.088-2.785-2.786-5.635-5.38-7.434-8.977-1.801-3.599-3.021-7.593-2.828-11.545zm4.82-53.46c2.053-3.047 2.654-7.721 3.92-11.521-.506 4.813.467 10.106-1.883 13.592-2.35 3.486-6.477 2.875-9.896 3.889 2.66-2.028 5.805-2.913 7.859-5.96zm-49.151 71.368c2.636-2.134 9.75-.428 15.071-.047l-11.472 2.938c-.356 1.301-.195 2.792-1.068 3.901-.874 1.11-2.534 1.521-3.8 2.28.125-3.418-1.367-6.939 1.269-9.072zm37.491-148.22c3.176 1.71 7.207 3.971 10.012 4.041s3.539-1.834 5.189-2.933c2.596 8.465 5.576 17.766 9.996 25.447 1.852 3.218 3.033 1.722 4.441 4.956 1.406 3.233 2.031 9.812 3.365 13.943 1.336 4.131 3.078 7.171 4.617 10.756-3.908-5.537-8.957-12.597-11.135-17.205-2.176-4.607-.783-5.008-2.545-9.396s-5.324-11.228-7.986-16.842c-1.906.253-4.266.6-5.715.153-1.449-.447-1.16-1.988-2.469-2.984-1.311-.996-3.514-.61-5.35-2.2-1.836-1.589-2.254-4.85-2.42-7.736zm-17.101 41.769c2.989-.262 6.701.539 9.5.38s4.797-.885 7.196-1.328c-.445-4.216-.023-11.962-3.915-14.777-2.514-1.818-12.839-.449-15.597.146-6.206 1.338-13.433 5.042-19.435 7.358 5.752-4.018 10.721-7.742 17.62-9.816 4.147-1.247 13.825-2.868 18.105-1.712 1.954.527 2.349 1.336 3.534 2.992 4.074 5.688 4.062 10.604 5.119 17.23 1.039 1.619 2.146 2.699 2.988 4.369.84 1.67 1.316 4.298 1.551 6.446-1.066-1.546-.414-3.485-3.367-4.636-2.955-1.151-7.479-.076-11.46.34 2.902 2.094 4.344 4.111 4.455 8.538.13 5.198-4.271 8.939-8.866 9.295-6.379.495-9.668-.906-12.248-6.358-1.13-2.388-.311-5.261-.405-7.589-7.665.533-7.54.283-13.142 4.954 3.045 4.461 4.963 7.026 9.995 9.695 2.822 1.498 6.017 2.954 9.514 3.549 3.498.595 9.235 1.17 12.909.606 3.675-.564 5.757-1.613 8.481-4.132 2.725-2.52 2.975-6.128 4.039-8.98-.242 2.745-.557 6.241-1.576 8.232-3.1 6.053-8.461 7.847-14.862 7.867-6.144.02-13.744-1.397-19.46-3.767-4.57-1.894-12.146-7.258-13.944-11.918-1.229-3.184-.256-7.091-.385-10.637 6.328-4.208 7.894-3.173 15.381-4.405 3.132-.516 5.286-1.679 8.275-1.942zm-36.861-28.501c.178-2.521.457-2.467.686-3.701-5.765-1.542-8.077 2.198-11.457 9.144-1.265 2.599-.013 4.146-1.37 5.857-1.355 1.711-3.539 1.471-5.74 3.114-2.201 1.642-4.382 4.787-6.44 6.488-4.223 3.491-9.931 5.622-14.829 7.971 3.345-2.468 9.836-6.211 11.936-9.797 1.114-1.901.949-5.486 2.683-7.195 1.733-1.71 2.34-2.893 4.578-3.329 2.238-.436 1.338-3.03 2.06-5.092s2.16-3.526 3.69-5.586 3.46-5.153 6.481-6.276c3.021-1.124 7.732.091 10.019-.556 2.286-.647.973-2.309 2.634-3.307 1.663-.998 4.896-.558 7.117-1.625 3.937-1.893 5.82-5.053 8.188-8.436.344 7.282.26 12.525-2.357 19.376-2.947 7.711-5.934 12.253-14.298 16.995-2.882 1.633-5.75 2.2-8.139 3.057 1.393-1.9 3.387-2.725 4.18-5.7.791-2.977.2-8.88.378-11.402zm135.038 35.507c-3.977.259-4.92-.264-8.102 1.98l5.172 8.052c-.152-5.298.364-6.36 2.93-10.032zm-10.42-3.85c5.508-2.346 10.307-4.244 16.299-4.619 2.402-.151 6.131.221 8.557.331 2.066-3.042 4.699-5.441 5.664-8.913.639-2.303.324-12.992-.807-15.767-3.295-8.076-6.498-8.417-11.033-13.043-3.291-3.355-3.422-8.464-4.406-14.189-.361-2.103-1.393-4.764-1.877-6.934-5.928-.999-12.303-1.328-19.123-.987 3.307-3.172 6.504-6.07 7.453-10.832.947-4.762.176-10.617-2.531-14.887-2.707-4.27-7.031-7.99-11-11.469-3.971-3.479-9.662-6.351-13.424-9.197 4.893-1.752 9.889-4.326 14.682-5.255 12.486-2.422 23.244 1.282 35.287 8.563 7.002 4.235 12.793 8.258 20.113 15.921 7.318 7.662 16.395 21.717 23.48 30.052s12.805 14.927 18.986 19.898c6.182 4.972 11.777 6.388 17.664 9.581l9.176 9.744 7.426-9.189 11.949 1.351 2.469-13.412 10.967-3.005-1.789-18.08 7.885-5.596-5.926-11.249 6.021-12.292-7.85-14.051 3.027-13.529-9.088-7.745-1.186-14.377-12.678-4.836-5.086-12.508-14.254-.16-6.992-9.285-9.596.672-10.697-1.165-6.049-4.466-8.779 5.828-10.623-5.539-21.117 8.017 13.766-11.972 14.262-2.278 10.926-2.785 14.756 4.846 12.988-3.29 12.523 7.403 13.252-.733 6.51 11.681 13.195 1.523 7.139 12.987 8.299 4.531 2.203 16.637 7.391 7.01-3.25 14.557 8.707 11.024-8.164 11.812 8.73 7.383-11.16 9.891 11.303 11.771-13.65 4.402 8.891 12.625-11.15 1.924 7.312 13.882-12.566-.167 6.33 10.398-13.783-1.659 3.297 14.959-10.416-9.163-3.568 18.13-7.188-13.018-3.893 16.237-8.873-11.973.242 17.026-9.807-15.309c2.068 8.686 1.654 18.197 7.359 26.386 17.676-2.392 29.229-6.846 42.771-19.877 12.334-11.868 27.076-36.613 31.068-52.308 4.555-17.91 4.695-50.85.209-69.084-4.318-17.556-9.93-25.942-19.957-40.268-9.584-10.179-19.01-20.932-31.174-28.191-17.856-10.655-40.752-13.528-61.102-13.251-11.268.154-18.816 2.318-25.553 4.768-11.781 4.284-21.203 13.629-33.18 18.247-3.906 1.505-7.037 1.552-10.113-.091 3.012 6.026 6.289 8.729 13.801 10.922 5.434 1.586 18.4.583 27.326-.241 9.582-.885 14.58-3.734 27.621-3.555 12.736.175 22.828 5.013 28.346 8.168 11.385 6.51 19.549 13.732 26.643 25.172 3.896 6.282 6.625 13.37 8.547 20.603 1.922 7.233 2.764 15.334 2.887 22.415.123 7.081-.418 13.402-2.15 19.774-4.051 14.918-12.988 30.098-31.346 27.753-11.234-1.436-28.17-22.522-33.842-30.258-11.445-15.613-23.221-32.89-37.602-45.892-8.768-7.925-20.773-13.379-32.562-14.458-22.117-2.024-28.676 2.177-45.324 15.899 3.387 1.08 6.693 1.676 10.164 3.24 7.703 3.471 14.748 7.957 20.893 13.711 6.439 6.031 9.328 9.848 9.557 18.484.152 5.735-4.566 10.333-8.891 14.469-2.646 2.533-6.148 4.852-8.291 6.818-2.84 2.609-6.357 5.463-2.789 9.619 1.342 1.562 3.672 2.74 5.637 4.199 3.119 2.315 1.691 10.919-2.418 13.201-5.258 2.917-11.541 2.591-15.877-1.314 5.473-.819 8.949-1.545 8.807-6.022-.082-2.595-3.381-4.751-6.619-6.227-7.809-3.56-13.707-3.035-21.479-8.627-7.85-5.651-8.023-8.745-10.145-17.617-3.785.396-7.27.483-12.331 2.159-5.061 1.675-10.654 5.663-15.249 6.65-11.572 2.49-13.878 1.752-20.211.113-11.15-2.886-25.668 2.055-40.09 6.668-2.398.767-12.097.026-18.626 2.317-10.084 3.538-24.233 12.106-32.405 18.988-12.382 10.429-28.654 41.64-37.848 77.464-.966 10.89 2.131 18.227-4.729 23.546-6.86 5.319-6.67 18.946-8.996 22.768-2.326 3.821-5.019 2.132-10.026 7.499-5.007 5.367-7.556 4.47-7.43 14.618 4.315-2.837 10.606-6.135 16.13-6.334 4.892-.177 4.944 6.264 17.5-6.149 6.715-6.641 19.616-6.844 28.567-9.773 8.952-2.929 25.083-8.965 41.239-27.027s23.887-37.077 27.02-64.567c.499 4.874 1.365 10.371-.722 23.816s-6.585 28.546 2.891 46.634l5.904 11.269c-3.515-4.797-10.381-12.622-12.448-18.198l-4.768-12.863c-10.667 16.748-13.119 19.744-27.937 31.743-.59 7.444-.735 15.208 1.698 22.331 2.433 7.122-1.445 15.332.406 20.023s6.132 2.021 7.53 6.77-.73 14.138 1.438 18.767 7.487 1.82 10.065 3.315c2.578 1.496 3.421 3.546 4.8 5.513 1.378 1.966-.539 6.614 2.265 8.123 2.803 1.51 7.176.231 10.093 1.68 2.917 1.449 3.36 4.932 2.661 8.053-.7 3.121-3.817 4.553-5.186 7.726-1.368 3.174-1.215 5.383.429 8.297 1.644 2.915 5.284 4.52 8.912 5.991 3.628 1.471 8.726.645 12.47 2.679 3.744 2.034 7.109 6.087 9.086 9.033 1.977 2.945 2.526 5.023 2.425 8.12-.102 3.096-1.358 6.663-3.011 9.654s-5.3 6.631.394 12.343c5.694 5.711 5.484 3.249 8.746 6.954-.355-6.409-3.003-11.63-1.067-16.455 1.937-4.825 7.752-5.664 10.817-7.834 3.065-2.171 4.83-5.153 7.246-7.729-.035 3.315.32 6.879-.057 9.375-.768 5.075-2.266 9.58 5.297 10.394 3.407.366 6.642-1.843 10.227-3.169-1.878 3.363-5.144 6.067-5.635 10.092-.491 4.023.099 8.443 2.885 12.436 2.787 3.991 7.599 6.955 11.125 9.301 3.525 2.347 5.414 2.535 8.123 3.804.133 3.956-.646 8.143-.195 11.869s1.625 7.024 3.779 10.104c2.156 3.081 5.613 4.848 8.869 7.126-1.785-4.157-5.406-8.101-5.357-12.471.049-4.369 1.359-7.466 5.621-11.343 4.262-3.878 14.24-7.241 18.945-11.011 4.705-3.771 6.223-6.081 7.912-9.742s1.219-9.559 1.531-12.85c1.549 4.61 1.77 6.043 2.273 10.866.506 4.824-2.811 11.59-4.215 15.161 5.82-2.811 9.514-7.304 11.379-11.695 1.248.74.619 2.769 1.078 6.679 2.074-2.064 4.432-3.652 6.52-5.6 2.09-1.946 4.379-3.658 5.416-6.375 1.035-2.717.611-5.606-.16-8.763s-4.299-6.818-6.199-10.271c-1.898-3.452.336-6.841.207-11.001-3.801-.653-7.029-2.589-11.398-1.96-4.371.628-9.377 5.533-13.844 5.59s-6.975-4.128-10.637-5.278-7.367-1.024-11.049-1.536c4.664-4.468 22.766-6.596 35.148-8.615 10.895-1.777 21.707-2.804 32.746-2.959 4.93-.07 11.266 1.558 14.689.574 3.426-.982 2.695-3.315 3.711-5.858 2.842-7.108 1.441-13.438-.105-20.596-9.91-1.162-20.236-2.584-30.221-1.817-9.762.75-21.322 5.391-31.391 5.705-8.754.272-21.717-1.677-29.234-6.259-9.186-5.599-16.293-17.624-18.816-21.485-4.109-6.289-9.292-18.627-12.446-24.268-3.152-5.641-3.847-7.219-6.47-9.574-2.623-2.354-6.216-2.536-9.323-3.805 3.582.366 7.493-.768 10.747 1.098 4.889 2.805 10.361 14.431 13.403 19.49 3.223-10.804 2.471-15.052 11.797-21.144-7.516 8.424-7.703 14.805-9.535 24.723 6.25 10.258 14.939 26.598 26.309 31.132 4.107 1.639 11.16 2.667 15.6 3.216 13.818 1.711 27.146-2.668 40.717-6.019 9.92-2.45 19.986-1.463 32.051-.754 4.096.24 13.754-2.224 15.754-6.367 1.08-2.235 1-4.921-.551-7.303-1.553-2.382-5.689-3.534-7.906-5.678s-3.492-4.689-5.238-7.034c-9.215 1.768-16.795 2.447-23.635 2.633 4.906-2.021 9.613-3.174 14.719-5.171s10.904-5.275 15.025-7.995c4.121-2.721 6.752-4.299 9.734-7.465 2.98-3.168 6.803-6.431 9-10.303 2.199-3.872 2.539-8.203 2.662-12.995.123-4.791-.084-11.514-1.932-15.374-1.846-3.859-5.406-5.03-8.266-5.943-2.861-.913-4.82 1.396-7.795 1.708-2.977.312-5.758 2.188-10.062.164s-9.406-6.144-13.758-12.259c-4.35-6.116-7.461-16.112-11.896-23.802-7.645-13.256-17.172-25.639-26.283-37.922-.75-3.029-1.877-7.215-2.252-11.324-.654-7.16-.777-14.598 1.445-21.578 1.703-5.347 4.18-10.995 9.779-13.188 2.24-.878 5.074-1.226 7.076-.484 2.004.741 3.969 3.002 3.182 5.614-.865 2.872-2.855 2.95-4.207 4.4-2.295 2.46-3.213 4.265-4.08 7.332 2.48-.04 5.832-.229 7.869.307 2.658.7 5.133 2.462 6.482 6.228-3.172-2.813-4.748-4.104-8.707-4.204-1.814-.045-4.018.604-6.025.906-.75 2.44-1.191 5.432-2.25 7.32s-3.121 1.435-3.895 3.641c-.774 2.202-.819 5.788-.429 8.683zm27.715-3.307c1.215.479 1.678.584 3.217 1.755s3.662 2.34 4.881 5.138c1.221 2.799 1.164 7.127.904 8.89-1.07-.314-2.529-.102-3.639-1.051-1.107-.949-1.768-3.098-3.188-4.018-1.422-.919-2.607-.718-4.178-.917.807 2.296 1.199 4.593.824 6.675-.814 4.545-3.486 6.847-7.812 7.391-1.889.237-4.889-.385-6.533-.684.762 1.702 2.053 3.193 2.816 4.895 3.658-.529 6.369-.454 8.336-1.374s4.076-2.981 6.6-3.854c2.525-.873 4.777-.859 7.539-1.29-2.176 1.875-3.604 3.751-5.777 5.626l4.781 13.897c3.379 2.114 6.549 3.228 10.807 5.838 4.26 2.611 9.367 7.281 14.914 9.828s8.85 3.933 14.646 5.026c5.795 1.093 10.406 5.787 16.109 6.55s16.355.917 20.75.488c4.99-.487 11.473-3.062 12.055-8.533-4.184 1.032-10.574.106-13.801-7.767-1.432-3.496-.73-9.925-2.922-14.059-2.191-4.135-5.246-5.462-8.896-10.556s-9.621-13.129-12.973-19.954c-3.35-6.824-4.139-14.554-6.973-20.669-2.834-6.114-7.109-11.053-10.422-15.766-7.234-10.3-13.068-17.339-24.986-22.535-5.732-2.499-12.258-3.165-18.387-4.748-2.494 1.117-5.914 2.351-6.521 5.268-.607 2.917.559 7.225 2.676 9.415 3.543 3.661 8.793 7.618 10.857 13.437 1.326 3.734 1.711 16.252.562 19.649-1.192 3.527-3.963 5.66-6.266 8.009zm1.154 29.629c-1.107.955-1.951 1.936-3.732 2.729-1.779.793-4.209.998-6.57 1.588 3.311 5.154 6.789 10.362 9.961 15.781 3.174 5.418 5.924 11.351 8.953 17.025-.143-3.252.049-6.719-.424-9.758-.473-3.038-1.85-5.697-3.215-10.258-1.363-4.561-3.041-10.766-4.973-17.107zm-89.085-113.324c-.467 5.07.391 12.996 1.441 17.96 1.258 5.942 2.469 9.023 7.291 12.603 8.83 6.555 14.467 5.45 21.26 9.251 3.232 1.809 7.328 4.841 8.523 8.046 1.195 3.205-.789 6.685-3.24 8.053 4.287.638 9.094-4.195 7.088-9.157-.988-2.442-5.691-3.53-7.133-5.994-1.439-2.463-1.436-4.999-.758-7.501 1.225-4.51 10.148-8.608 13.301-12.173 4.852-5.486 6.715-10.075 3.967-17.14-3.859-9.925-18.768-17.889-27.691-21.784-4.086-1.783-6.377-1.91-9.564-2.865 6.525 3.824 13.404 6.87 16.705 15.418 2.756 7.139.369 9.829.461 16.045.043 2.882 3.838 4.323 5.523 6.144 1.467 1.583 1.348 2.758.176 4.943-.129-1.971-.971-3.442-2.484-4.513-2.498-1.771-5.189-1.39-6.52-5.021-2.02-5.52 1.986-10.748-2.518-16.946-3.369-4.637-7.85-9.827-13.895-9.963-2.861-.065-5.012.367-8.068 1.271l-4.074-4.903-.094-.064c-8.287-7.563-13.957-13.796-25.582-18.994-11.625-5.197-17.354-5.984-30.683-5.688-13.329.295-26.557 1.41-41.995 14.723-15.437 13.313-55.224 64.292-64.873 70.744-9.648 6.452-11.785 8.638-23.841 8.641-12.056.003-30.872-17.05-31.609-38.362-.738-21.313-1.034-28.888 13.781-54.563 14.816-25.676 41.656-33.56 61.57-36.222 19.915-2.662 31.882 4.352 46.613 4.385 14.73.034 29.288-2.509 33.581-14.224-2.101 1.251-4.916 2.661-12.832 2.246-7.916-.415-18.892-9.58-31.239-15.721-12.347-6.14-26.087-6.859-43.71-7.192S88.494 6.108 66.708 17.869s-36.657 24.24-49.293 47.258C4.779 88.146 2.891 106.94 4.928 134.811c2.037 27.871 10.633 48.599 27.184 68.998s33.092 30.38 62.918 34.091l6.279-27.696L90.1 226.29l.277-17.891-10.139 12.581-4.447-17.062-8.214 13.679-4.08-19.05-11.903 9.627 3.768-15.719-15.75 1.743 7.235-10.926-14.361.175 8.356-14.587-12.742-2.023 10.16-13.267-15.6-4.625 12.916-12.368-12.753-10.393 9.975-7.758-9.328-12.412 9.95-11.583-3.714-15.296 8.449-7.365 2.515-17.481 9.482-4.762 8.158-13.646 15.079-1.601 7.44-12.274 15.145.771 14.312-7.779 14.843 3.457 16.86-5.092 12.487 2.926 16.296 2.395 15.733 12.58-24.133-8.424-12.14 5.821-10.035-6.125-6.909 4.693-12.225 1.224-10.963-.708-7.992 9.756-16.291.168-5.811 13.143-14.486 5.082-1.355 15.107-10.388 8.138 3.461 14.216-8.971 14.765 6.882 12.915-6.773 11.82 9.011 5.88-2.044 18.998 12.532 3.158 2.823 14.093 13.656-1.419 8.484 9.656 10.486-10.239c19.116-9.532 26.988-14.864 41.886-30.977 16.959-18.343 26.679-35.302 49.269-47.861 16.202-9.008 29.417-12.25 47.617-9.105 17.088 2.952 22.81 13.202 35.395 24 1.334-2.415 1.605-3.055 3.803-4.833-.69 3.136-1.786 6.389-2.065 9.405z" })));
};
export default SvgGnu;
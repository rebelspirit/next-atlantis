import ContentLoader from 'react-content-loader';

export const CustomContentLoader = props => (
    <ContentLoader
        speed={3}
        width={240}
        height={442}
        viewBox="0 0 240 442"
        backgroundColor="#E0E0E0"
        foregroundColor="#ECEBEB"
        {...props}
    >
        <rect x="0" y="8" rx="12" ry="12" width="240" height="390" />
        <rect x="0" y="406" rx="6" ry="6" width="200" height="12" />
        <rect x="0" y="428" rx="6" ry="6" width="50" height="12" />
    </ContentLoader>
);

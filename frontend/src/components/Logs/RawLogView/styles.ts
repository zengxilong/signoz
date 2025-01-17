import { blue } from '@ant-design/colors';
import { Col, Row } from 'antd';
import styled from 'styled-components';

export const RawLogViewContainer = styled(Row)<{ $isDarkMode: boolean }>`
	width: 100%;
	font-weight: 700;
	font-size: 0.625rem;
	line-height: 1.25rem;

	transition: background-color 0.2s ease-in;

	&:hover {
		background-color: ${({ $isDarkMode }): string =>
			$isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0, 0, 0, 0.1)'};
	}
`;

export const ExpandIconWrapper = styled(Col)`
	color: ${blue[6]};
	padding: 0.25rem 0.375rem;
	cursor: pointer;
	font-size: 12px;
`;

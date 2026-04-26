import styled from "styled-components";

export const Card = styled.div`
  width: 320px;
  padding: 24px;
  border-radius: 18px;
  background: linear-gradient(135deg, #4f8cff, #7b5cff, #9b6dff);
  box-shadow: 0 8px 20px rgba(79, 140, 255, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: white;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(79, 140, 255, 0.35);
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 18px;
  color: white;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 10px 0;
  font-size: 16px;
  line-height: 1.5;
  color: #f8f9ff;

  svg {
    font-size: 18px;
    color: #ffffff;
  }
`;
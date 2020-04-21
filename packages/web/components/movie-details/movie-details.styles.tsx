import styled from 'styled-components';

export const MovieDetailsStyles = styled.div`
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  max-height: 80vh;

  .header-container {
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    height: 348px;
    width: 100%;
  }

  .header-background {
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
  }

  .header-background-overlay {
    background-image: linear-gradient(
      to right,
      rgba(12.94%, 14.9%, 22.75%, 1) 150px,
      rgba(20.39%, 22.35%, 29.02%, 0.84) 100%
    );
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .header-content {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 36px;
    padding-right: 36px;
    height: 100%;
    width: 100%;
  }

  .poster-container {
    overflow: hidden;
    border-radius: 4px;
    height: auto;
    width: 200px;

    .poster-image {
      height: auto;
      width: 200px;
    }
  }

  .movie-details {
    flex: 1;
    margin-left: 36px;
    color: #fff;
  }

  .title {
    font-size: 2.2em;
    font-weight: 700;

    .year {
      font-size: 0.8em;
      font-weight: 300;
      margin-left: 4px;
    }
  }

  .play-trailer {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    margin-top: 12px;
    margin-bottom: 12px;

    svg {
      margin-right: 8px;
    }
  }

  .informations-row {
    display: flex;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 8px;

    .vote--container {
      margin-right: 24px;
    }
  }

  .overview {
    font-size: 1.2em;
    max-width: 780px;
  }
`;

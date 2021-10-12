import React from "react";
import { NextPage } from "next";
import axios from "./api/axios";
import { AxiosResponse } from "axios";

type NowPlaying = {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: number;
};

type Popular = {
  id: number;
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: number;
  vote_average: number;
};

interface Props {
  nowPlaying: NowPlaying[] | null;
  popular: Popular[] | null;
}

const Home: NextPage<Props> = (props) => {
  if (props.nowPlaying.length === 0) return <>null</>;

  console.log(props);
  return (
    <div>
      {props.nowPlaying.map((v, i) => {
        return <div key={i}>{v.original_title}</div>;
      })}
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  try {
    const nowPlaying: AxiosResponse<any> = await axios().get(
      "movie/now_playing"
    );
    const popular: AxiosResponse<any> = await axios().get("movie/popular");

    return {
      nowPlaying: nowPlaying.data.results,
      popular: popular.data.results,
    };
  } catch (e) {
    return null;
  }
};

export default Home;

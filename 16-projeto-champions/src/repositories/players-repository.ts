import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-models";

const dataBase: PlayerModel[] = [
  {
    "id": 1,
    "name": "Lionel Messi",
    "club": "Barcelona",
    "nationality": "Argentina",
    "position": "RW",
    "statistics": {
      "overall": 94,
      "pace": 91,
      "shooting": 92,
      "passing": 88,
      "dribbling": 96,
      "defending": 36,
      "physical": 60
    }
  },
  {
    "id": 2,
    "name": "Cristiano Ronaldo",
    "club": "Real Madrid",
    "nationality": "Portugal",
    "position": "LW",
    "statistics": {
      "overall": 92,
      "pace": 92,
      "shooting": 91,
      "passing": 83,
      "dribbling": 90,
      "defending": 35,
      "physical": 78
    }
  },
  {
    "id": 3,
    "name": "Andrés Iniesta",
    "club": "Barcelona",
    "nationality": "Spain",
    "position": "CM",
    "statistics": {
      "overall": 91,
      "pace": 78,
      "shooting": 76,
      "passing": 92,
      "dribbling": 93,
      "defending": 60,
      "physical": 58
    }
  },
  {
    "id": 4,
    "name": "Xavi",
    "club": "Barcelona",
    "nationality": "Spain",
    "position": "CM",
    "statistics": {
      "overall": 90,
      "pace": 65,
      "shooting": 72,
      "passing": 94,
      "dribbling": 88,
      "defending": 62,
      "physical": 55
    }
  },
  {
    "id": 5,
    "name": "Didier Drogba",
    "club": "Chelsea",
    "nationality": "Ivory Coast",
    "position": "ST",
    "statistics": {
      "overall": 88,
      "pace": 80,
      "shooting": 87,
      "passing": 68,
      "dribbling": 78,
      "defending": 42,
      "physical": 85
    }
  },
  {
    "id": 6,
    "name": "Franck Ribéry",
    "club": "Bayern Munich",
    "nationality": "France",
    "position": "LW",
    "statistics": {
      "overall": 89,
      "pace": 89,
      "shooting": 82,
      "passing": 84,
      "dribbling": 91,
      "defending": 40,
      "physical": 68
    }
  },
  {
    "id": 7,
    "name": "Arjen Robben",
    "club": "Bayern Munich",
    "nationality": "Netherlands",
    "position": "RW",
    "statistics": {
      "overall": 90,
      "pace": 90,
      "shooting": 86,
      "passing": 82,
      "dribbling": 92,
      "defending": 38,
      "physical": 65
    }
  },
  {
    "id": 8,
    "name": "Thomas Müller",
    "club": "Bayern Munich",
    "nationality": "Germany",
    "position": "CAM",
    "statistics": {
      "overall": 86,
      "pace": 78,
      "shooting": 83,
      "passing": 80,
      "dribbling": 82,
      "defending": 55,
      "physical": 70
    }
  },
  {
    "id": 9,
    "name": "Petr Čech",
    "club": "Chelsea",
    "nationality": "Czech Republic",
    "position": "GK",
    "statistics": {
      "overall": 89,
      "pace": 50,
      "shooting": 20,
      "passing": 70,
      "dribbling": 30,
      "defending": 90,
      "physical": 78
    }
  },
  {
    "id": 10,
    "name": "Manuel Neuer",
    "club": "Bayern Munich",
    "nationality": "Germany",
    "position": "GK",
    "statistics": {
      "overall": 90,
      "pace": 55,
      "shooting": 18,
      "passing": 75,
      "dribbling": 35,
      "defending": 91,
      "physical": 80
    }
  },
  {
    "id": 11,
    "name": "Sergio Ramos",
    "club": "Real Madrid",
    "nationality": "Spain",
    "position": "CB",
    "statistics": {
      "overall": 88,
      "pace": 83,
      "shooting": 65,
      "passing": 70,
      "dribbling": 72,
      "defending": 87,
      "physical": 84
    }
  },
  {
    "id": 12,
    "name": "Gerard Piqué",
    "club": "Barcelona",
    "nationality": "Spain",
    "position": "CB",
    "statistics": {
      "overall": 87,
      "pace": 70,
      "shooting": 60,
      "passing": 75,
      "dribbling": 68,
      "defending": 88,
      "physical": 82
    }
  },
  {
    "id": 13,
    "name": "David Silva",
    "club": "Manchester City",
    "nationality": "Spain",
    "position": "CAM",
    "statistics": {
      "overall": 87,
      "pace": 75,
      "shooting": 78,
      "passing": 90,
      "dribbling": 89,
      "defending": 48,
      "physical": 54
    }
  },
  {
    "id": 14,
    "name": "Wayne Rooney",
    "club": "Manchester United",
    "nationality": "England",
    "position": "ST",
    "statistics": {
      "overall": 90,
      "pace": 85,
      "shooting": 88,
      "passing": 82,
      "dribbling": 85,
      "defending": 45,
      "physical": 82
    }
  },
  {
    "id": 15,
    "name": "Zlatan Ibrahimović",
    "club": "AC Milan",
    "nationality": "Sweden",
    "position": "ST",
    "statistics": {
      "overall": 91,
      "pace": 76,
      "shooting": 90,
      "passing": 82,
      "dribbling": 88,
      "defending": 40,
      "physical": 88
    }
  },
  {
    "id": 16,
    "name": "Ashley Cole",
    "club": "Chelsea",
    "nationality": "England",
    "position": "LB",
    "statistics": {
      "overall": 85,
      "pace": 82,
      "shooting": 60,
      "passing": 72,
      "dribbling": 74,
      "defending": 86,
      "physical": 75
    }
  },
  {
    "id": 17,
    "name": "Luka Modrić",
    "club": "Tottenham",
    "nationality": "Croatia",
    "position": "CM",
    "statistics": {
      "overall": 87,
      "pace": 74,
      "shooting": 75,
      "passing": 88,
      "dribbling": 86,
      "defending": 60,
      "physical": 62
    }
  },
  {
    "id": 18,
    "name": "Karim Benzema",
    "club": "Real Madrid",
    "nationality": "France",
    "position": "ST",
    "statistics": {
      "overall": 87,
      "pace": 83,
      "shooting": 85,
      "passing": 78,
      "dribbling": 84,
      "defending": 35,
      "physical": 77
    }
  },
  {
    "id": 19,
    "name": "Thiago Silva",
    "club": "AC Milan",
    "nationality": "Brazil",
    "position": "CB",
    "statistics": {
      "overall": 89,
      "pace": 78,
      "shooting": 55,
      "passing": 72,
      "dribbling": 70,
      "defending": 91,
      "physical": 86
    }
  },
  {
    "id": 20,
    "name": "Juan Mata",
    "club": "Chelsea",
    "nationality": "Spain",
    "position": "CAM",
    "statistics": {
      "overall": 86,
      "pace": 76,
      "shooting": 80,
      "passing": 88,
      "dribbling": 87,
      "defending": 45,
      "physical": 60
    }
  }
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return dataBase;
};

export const findAllPlayersById = async ( id: number ): Promise<PlayerModel | undefined> => {
    return dataBase.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  dataBase.push(player);
};

export const deleteOnePlayer = async(id: number) => {
  const index = dataBase.findIndex(player => player.id === id);

  if(index !== -1) {
    dataBase.splice(index, 1);
    return true;
  };

  return false;
};

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
  const playerIndex = dataBase.findIndex(player => player.id === id);
  if(playerIndex !== -1) {
    dataBase[playerIndex].statistics = statistics;
  };

  return dataBase[playerIndex];
};
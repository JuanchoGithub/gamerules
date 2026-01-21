
import { GameDataMap } from '../types';

export const GAME_CONTENT: GameDataMap = {
  chess: {
    en: {
      overview: "Chess is a centuries-old strategy game. The goal is simple: corner the opponent's King so it has no escape (Checkmate).",
      setup: "Bottom-right square must be white. Queens on their own color. Rooks in corners, Knights next, then Bishops. King & Queen in center.",
      rules: [
        { text: "The King moves one square in any direction.", boardConfig: "chess_king_move" },
        { text: "The Queen moves any number of squares in any straight or diagonal line.", boardConfig: "chess_queen_move" },
        { text: "Rooks move straight (ranks/files). Bishops move diagonally.", boardConfig: "chess_rook_bishop" },
        { text: "Knights move in an 'L' shape and are the only pieces that can jump over others.", boardConfig: "chess_knight_move" },
        { text: "Pawns move forward 1 square (2 on first move) and capture diagonally.", boardConfig: "chess_pawn_move" },
        { text: "En Passant: A special pawn capture that occurs when a pawn moves two squares and lands next to an enemy pawn.", boardConfig: "chess_en_passant" },
        { text: "Promotion: Reach the 8th rank with a pawn to turn it into any piece (usually a Queen).", boardConfig: "chess_promotion" },
        { text: "Stalemate: When a player has no legal moves but isn't in check. The game is a draw.", boardConfig: "chess_stalemate" }
      ],
      houseRules: [
        "No-Clock Play: Take your time to think, common in casual home games.",
        "Take-backsies: Allowing one undo per game for beginners.",
        "Touch-Move: If you touch a piece, you must move it (Strict house rule)."
      ],
      kidFriendly: "Play 'Pawn Race': First one to get a pawn to the other side wins. No other pieces involved!",
      strategies: [
        "Control the center (e4, d4 squares).",
        "Develop minor pieces (Knights/Bishops) before moving the Queen.",
        "Castle early to protect the King."
      ],
      pitfalls: ["Scholar's Mate (4-move loss)", "Leaving pieces 'hanging' (unprotected)"],
      stepByStep: [
        { round: 1, description: "White opens e4, Black responds e5. Controlling the center is priority #1.", boardConfig: "chess_round1" },
        { round: 2, description: "Nf3 attacks e5, Nc6 defends. Knights before Bishops!", boardConfig: "chess_round2" },
        { round: 3, description: "Bc4 eyes f7, Nf6 prepares for counter-play.", boardConfig: "chess_round3" },
        { round: 4, description: "O-O (Kingside Castle). King is safe, Rook is active.", boardConfig: "chess_round4" }
      ],
      scenarios: [
        { title: "Castling", description: "King moves two squares, Rook jumps over. Neither can have moved before!", boardConfig: "chess_castling" },
        { title: "Scholar's Mate", description: "The classic trap for beginners using Queen and Bishop.", boardConfig: "chess_scholar" }
      ],
      faqs: [{ question: "Can a King capture?", answer: "Yes, as long as it doesn't move into check!" }]
    },
    'es-ar': {
      overview: "El ajedrez es el juego de mesa más famoso del mundo. El objetivo es dar 'Jaque Mate' al Rey enemigo.",
      setup: "Cuadradito blanco abajo a la derecha. La Dama en su color. Torres en las esquinas, al lado los Caballos y después los Alfiles.",
      rules: [
        { text: "El Rey mueve un casillero para cualquier lado.", boardConfig: "chess_king_move" },
        { text: "La Dama mueve todo lo que quiera en cualquier dirección recta o diagonal.", boardConfig: "chess_queen_move" },
        { text: "Las Torres van recto. Los Alfiles solo por las diagonales de su color.", boardConfig: "chess_rook_bishop" },
        { text: "El Caballo mueve en 'L' y es el único que salta piezas. ¡Un genio!", boardConfig: "chess_knight_move" },
        { text: "Los Peones avanzan 1 (o 2 al principio) y comen en diagonal.", boardConfig: "chess_pawn_move" },
        { text: "Peón al paso (En Passant): Si un peón salta dos lugares y queda al lado del tuyo, ¡te lo podés comer igual!", boardConfig: "chess_en_passant" },
        { text: "Coronación: Si el peón llega al fondo, lo cambiás por una Dama (o lo que quieras).", boardConfig: "chess_promotion" },
        { text: "Tablas (Empate): Si no podés mover nada pero no estás en jaque, nadie gana.", boardConfig: "chess_stalemate" }
      ],
      houseRules: [
        "Pieza tocada, pieza movida: Si la tocaste, tenés que jugar esa.",
        "El 'Vale Cuatro': A veces se juega con revancha obligatoria.",
        "Reloj de cocina: Si no hay reloj oficial, se usa el celu o se juega 'a ojo'."
      ],
      kidFriendly: "Guerra de Peones: Pongan solo los peones. El primero que llega al otro lado, gana un alfajor.",
      strategies: [
        "No saqués la Dama muy rápido porque te la van a pasear.",
        "Enrocate de una para que no te maten al Rey en el medio.",
        "Fijate siempre qué te está amenazando el otro antes de mover."
      ],
      pitfalls: ["El Mate del Pastor (te ganan en 4)", "Colgar la Dama por no mirar bien el tablero"],
      stepByStep: [
        { round: 1, description: "e4 y e5. La clásica apertura para liberar al Alfil y la Dama.", boardConfig: "chess_round1" },
        { round: 2, description: "Caballo f3 ataca, Caballo c6 defiende. Desarrollo básico.", boardConfig: "chess_round2" },
        { round: 3, description: "Alfil c4 apunta al punto f7. ¡Cuidado que se viene el mate!", boardConfig: "chess_round3" },
        { round: 4, description: "Enroque corto. El Rey se va a dormir la siesta y la Torre entra al juego.", boardConfig: "chess_round4" }
      ],
      scenarios: [
        { title: "El Enroque", description: "El Rey mueve dos y la Torre salta. ¡Esencial!", boardConfig: "chess_castling" },
        { title: "Mate del Pastor", description: "Cómo evitar que te ganen en 4 jugadas de forma vergonzosa.", boardConfig: "chess_scholar" }
      ],
      faqs: [{ question: "¿El Rey puede comer?", answer: "Sí, el Rey come como cualquier otra pieza si no se pone en peligro." }]
    }
  },
  checkers: {
    en: {
      overview: "Standard 8x8 Checkers (Draughts). Capture all enemy pieces by jumping over them.",
      setup: "12 pieces per player on dark squares only. Three rows each.",
      rules: [
        { text: "Move diagonally forward to an empty dark square.", boardConfig: "checkers_move" },
        { text: "Jumping: If an enemy piece is adjacent and the square behind is empty, you MUST jump and capture.", boardConfig: "checkers_jump" },
        { text: "Multiple Jumps: If you can jump again after landing, you must continue the turn until no more jumps remain.", boardConfig: "checkers_multi_jump" },
        { text: "Kings: Reach the back row to become a King. Kings can move both forward and backward.", boardConfig: "checkers_king_move" },
        { text: "Mandatory Capture: In official rules, if you can jump, you have no choice—you must take the piece.", boardConfig: "checkers_jump_mandatory" }
      ],
      houseRules: [
        "The Huff (Soplada): If you forget to jump, the opponent can 'blow' your piece off the board.",
        "Flying Kings: Kings move any distance along a diagonal (Argentine/Spanish style).",
        "Must capture maximum: If multiple jump paths exist, you must take the path with the most pieces."
      ],
      kidFriendly: "Allow backwards moves for everyone to make the game faster and more chaotic!",
      strategies: ["Keep your back row intact.", "Control the center.", "Sacrifice one piece to gain two."],
      pitfalls: ["Leaving the center weak.", "Forgetting that jumps are mandatory."],
      stepByStep: [
        { round: 1, description: "Both players move their side pieces. Keeping the center solid is key.", boardConfig: "checkers_round1" },
        { round: 2, description: "First contact. The capture is mandatory, leading to an exchange.", boardConfig: "checkers_round2" },
        { round: 3, description: "Setting up a trap. Sacrifice a piece to open up a double jump.", boardConfig: "checkers_round3" },
        { round: 4, description: "The breakthrough. One piece reaches the end to become a King.", boardConfig: "checkers_round4" }
      ],
      scenarios: [
        { title: "Double Jump", description: "Chain reactions are the most satisfying part of checkers!", boardConfig: "checkers_double" },
        { title: "Trap Setting", description: "Lure the opponent into a mandatory jump that benefits you.", boardConfig: "checkers_trap" }
      ],
      faqs: [{ question: "Is jumping mandatory?", answer: "In almost every professional version, yes." }]
    },
    'es-ar': {
      overview: "Las Damas de toda la vida. Se juega en los cuadraditos oscuros y el que se queda sin fichas, pierde.",
      setup: "12 fichas por persona. Se usan solo las casillas negras. Tres filas para cada uno.",
      rules: [
        { text: "Movés siempre en diagonal hacia adelante, un casillero por vez.", boardConfig: "checkers_move" },
        { text: "Para comer, tenés que saltar por encima de la ficha del otro. ¡Es obligatorio!", boardConfig: "checkers_jump" },
        { text: "Soplada: Si no comés cuando podés, el otro te puede sacar la ficha ('soplar').", boardConfig: "checkers_jump_mandatory" },
        { text: "Saltos múltiples: Si podés seguir comiendo después de saltar, tenés que seguir hasta que no queden más.", boardConfig: "checkers_multi_jump" },
        { text: "La Reina (Dama): Cuando llegás al fondo, tu ficha se 'corona'. Ahora podés mover para adelante y para atrás.", boardConfig: "checkers_king_move" }
      ],
      houseRules: [
        "Dama Voladora: La Reina puede mover todos los casilleros que quiera en diagonal, no solo uno.",
        "Comer el máximo: Si tenés dos opciones para comer, tenés que elegir la que te permite comer más piezas.",
        "Sin soplada: En los torneos modernos no se sopla, es obligatorio volver atrás y hacer el movimiento de captura."
      ],
      kidFriendly: "¡Cualquier ficha puede ir para atrás! Así el juego es más dinámico para los más chiquitos.",
      strategies: ["Tratá de no desarmar la fila del fondo muy rápido.", "Mantené las fichas juntas para que no te coman de a una.", "Regalá una ficha para armar un hueco y comer dos."],
      pitfalls: ["Olvidarse que comer es obligatorio.", "Dejar las casillas del centro vacías."],
      stepByStep: [
        { round: 1, description: "Movimientos iniciales. Todos avanzan hacia el medio cuidándose las espaldas.", boardConfig: "checkers_round1" },
        { round: 2, description: "Primer encuentro. Se produce un cambio de fichas obligatorio.", boardConfig: "checkers_round2" },
        { round: 3, description: "La emboscada. Preparás el terreno para un salto doble.", boardConfig: "checkers_round3" },
        { round: 4, description: "Coronación. Una ficha logra pasar y se convierte en Dama. ¡Ahora es imparable!", boardConfig: "checkers_round4" }
      ],
      scenarios: [
        { title: "El Salto Doble", description: "Cuando comés dos fichas de un solo tiro. ¡Un lujo!", boardConfig: "checkers_double" },
        { title: "La Trampa", description: "Forzás al otro a comerte una ficha para vos después comerte tres.", boardConfig: "checkers_trap" }
      ],
      faqs: [{ question: "¿Es obligatorio comer?", answer: "Sí, si podés comer tenés que hacerlo. Si no, ¡te soplan!" }]
    }
  },
  backgammon: {
    en: {
      overview: "Backgammon is one of the world's oldest 'Race' games. The goal is to move all 15 of your checkers into your Home Board and then 'Bear them Off' (remove them) before your opponent.",
      setup: "The board has 24 triangles called 'Points'. Each player starts with 15 checkers: 2 on Point 24, 5 on Point 13, 3 on Point 8, and 5 on Point 6. White moves from 1 to 24, Black moves from 24 to 1.",
      rules: [
        { text: "Movement: Roll two dice. You can move one checker for each die number, or one checker for the total sum.", boardConfig: "bg_setup" },
        { text: "Doubles: If you roll the same number (e.g., 5-5), you move that number FOUR times.", boardConfig: "bg_doubles" },
        { text: "Closed Points: You cannot land on a point occupied by 2 or more of your opponent's checkers.", boardConfig: "bg_closed" },
        { text: "Hitting: Land on a single enemy checker (a 'Blot') to send it to the Bar. They must restart from the beginning.", boardConfig: "bg_hit" },
        { text: "Entering: If you have a checker on the Bar, you must roll and enter it into the opponent's Home Board before moving anything else.", boardConfig: "bg_bar_reentry" },
        { text: "Bearing Off: Once all 15 checkers are in your Home Board (Points 1-6), you can start removing them based on your dice rolls.", boardConfig: "bg_bearing_off" }
      ],
      houseRules: [
        "The Crawford Rule: Prevents use of the doubling cube for one game when a player is one point away from winning the match.",
        "Automatic Doubles: If both players roll the same number for the starting move, the stakes are doubled.",
        "Beaver: A player who is doubled can immediately 'Beaver', doubling the stakes again while keeping the cube."
      ],
      kidFriendly: "Simple Race: Forget about hitting and the bar. Just focus on moving the pieces home and counting the dice. First one to empty the board wins!",
      strategies: [
        "The 'Golden Point': Focus on taking control of your Point 5 or the opponent's Point 20 early.",
        "Safe Points: Try to have at least 2 checkers on any point you land on so they can't be 'hit'.",
        "The Blitz: Try to hit as many of your opponent's blots as possible to keep them on the bar while you close your board."
      ],
      pitfalls: [
        "Leaving 'Blots' (single checkers) unprotected in the late game.",
        "Getting 'trapped' behind a prime (six consecutive closed points).",
        "Bearing off too aggressively when your opponent still has checkers in your home board."
      ],
      stepByStep: [
        { round: 1, description: "The Setup: White pieces at the bottom, Black at top. White is moving counter-clockwise towards the bottom-right quadrant.", boardConfig: "bg_setup" },
        { round: 2, description: "The Roll: White rolls 3 and 1. They move a checker from Pt 24 to 21, and another from Pt 8 to 7, or combined from 24 to 20.", boardConfig: "bg_round1" },
        { round: 3, description: "The Hit: Black rolls a 2 and lands on a single White checker at Pt 20. White is sent to the Bar!", boardConfig: "bg_hit" },
        { round: 4, description: "The Win: White has all pieces in the final 6 points and rolls a 6 and 5. Two pieces are 'Borne Off' (removed) from the board.", boardConfig: "bg_bearing_off" }
      ],
      scenarios: [
        { title: "The Bar", description: "When hit, you must place your checker on the center bar. You can't move other pieces until this one re-enters.", boardConfig: "bg_hit" },
        { title: "Bearing Off", description: "The final race. You need to roll the exact number of the point (or higher) to remove a piece.", boardConfig: "bg_bearing_off" },
        { title: "A Prime", description: "Six points in a row owned by one player. The opponent literally cannot jump over it!", boardConfig: "bg_prime" }
      ],
      faqs: [
        { question: "Can I pass my turn?", answer: "No. You must use both numbers on the dice if legal moves exist. If only one can be played, you must play the higher number." },
        { question: "What is a Gammon?", answer: "If you win before your opponent has borne off ANY checkers, you win double the points (a Gammon)." }
      ]
    },
    'es-ar': {
      overview: "El Backgammon es una carrera milenaria. El objetivo es traer tus 15 fichas a tu 'Casa' y después sacarlas del tablero antes que el otro.",
      setup: "El tablero tiene 24 triángulos llamados 'Picos' o Puntos. Arrancás con 2 fichas en el punto 24, 5 en el 13, 3 en el 8 y 5 en el 6. Las blancas van hacia el 24, las negras hacia el 1.",
      rules: [
        { text: "Movimiento: Tirás los dados y movés. Podés usar cada dado con una ficha distinta o sumar los dos para una sola.", boardConfig: "bg_setup" },
        { text: "Dobles: Si sacás lo mismo (ej. 4 y 4), ¡movés CUATRO veces ese número! Una fiesta.", boardConfig: "bg_doubles" },
        { text: "Puntos Bloqueados: No podés caer donde el otro tenga 2 o más fichas. Ese lugar es de él.", boardConfig: "bg_closed" },
        { text: "Comer (Hit): Si caés donde hay una sola ficha del otro (un 'Blot'), lo mandás al Bar (al medio). Tiene que empezar de cero.", boardConfig: "bg_hit" },
        { text: "Reingreso: Si tenés una ficha en el Bar, no podés mover nada más hasta que esa ficha vuelva a entrar al tablero del otro.", boardConfig: "bg_bar_reentry" },
        { text: "Sacar Fichas: Cuando tenés las 15 en tu 'Casa' (los últimos 6 casilleros), empezás a sacarlas del tablero según los dados.", boardConfig: "bg_bearing_off" }
      ],
      houseRules: [
        "Regla de Crawford: En partidos a varios puntos, cuando uno está por ganar, no se puede usar el dado de doblar por una partida.",
        "Dobles de entrada: Si en la primera tirada para ver quién empieza empatan, la partida ya vale el doble.",
        "El 'Vale Cuatro': Aunque es del truco, acá se usa el Cubo de Doblado para subir la apuesta si sentís que vas ganando."
      ],
      kidFriendly: "Carrera Loca: Olvidate de comer fichas y del bar. Solo tiren los dados y vean quién llega primero al final con todas las fichas. ¡Ideal para no pelearse!",
      strategies: [
        "El Punto de Oro: Tratá de capturar el punto 5 de tu casa o el 20 del otro lo antes posible. Son clave.",
        "No regalarse: Intentá siempre tener de a 2 fichas juntas. Una ficha sola es un 'regalito' para que el otro te coma.",
        "Hacer una Muralla (Prime): Si lográs ocupar 6 picos seguidos, el otro no puede pasar aunque saque un 6. Queda atrapado."
      ],
      pitfalls: [
        "Dejar una ficha sola (blot) cuando el otro está por entrar del Bar.",
        "Gastar movimientos en traer fichas que ya están seguras mientras otras están muy atrás.",
        "No darse cuenta que el otro está por cerrar su casa y te va a dejar afuera."
      ],
      stepByStep: [
        { round: 1, description: "Preparación: Blancas abajo, Negras arriba. Las blancas se mueven en 'U' hacia la derecha abajo (su casa).", boardConfig: "bg_setup" },
        { round: 2, description: "La Salida: Sacás un 4 y un 2. Movés una de la punta (24) seis lugares, o repartís el movimiento.", boardConfig: "bg_round1" },
        { round: 3, description: "La Comida: El negro saca el número justo y cae arriba de tu ficha sola. ¡Al Bar de una!", boardConfig: "bg_hit" },
        { round: 4, description: "El Final: Ya tenés todas en tu zona. Sacás un 6 y un 4, y retirás las dos fichas correspondientes. ¡Casi ganás!", boardConfig: "bg_bearing_off" }
      ],
      scenarios: [
        { title: "El Bar", description: "Cuando te comen, vas al medio. Tenés que sacar el número de un casillero libre del otro para volver.", boardConfig: "bg_hit" },
        { title: "Sacar Fichas (Bearing Off)", description: "La etapa final. Necesitás los dados exactos para ir limpiando el tablero.", boardConfig: "bg_bearing_off" },
        { title: "La Muralla (Prime)", description: "Seis puntos seguidos ocupados. Es como un muro de concreto para el oponente.", boardConfig: "bg_prime" }
      ],
      faqs: [
        { question: "¿Puedo pasar el turno?", answer: "No. Si hay un movimiento legal, tenés que hacerlo sí o sí. ¡A llorar al campito!" },
        { question: "¿Qué es un Gammon?", answer: "Si ganás y el otro no sacó NI UNA ficha, ganás doble. Si encima tiene una en tu casa o en el bar, es Backgammon (triple)." }
      ]
    }
  },
  mancala: {
    en: {
      overview: "Mancala (or Kalah) is a mathematical 'sowing' game of African origin. It's about counting, timing, and strategic 'harvesting' of seeds.",
      setup: "Place 4 seeds in each of the 12 small pits. Your 'Store' (Mancala) is the large pit on your right side. You control the row of pits directly in front of you.",
      rules: [
        { text: "The Sowing: Pick any pit on your side. Take all seeds and drop them one by one into the next pits in a counter-clockwise direction.", boardConfig: "mancala_setup" },
        { text: "The Alleys: While sowing, include your own store, but skip the opponent's store. If you pass your own store, drop a seed in.", boardConfig: "mancala_store_hit" },
        { text: "Free Turn (Infinite Moves): If the LAST seed of your sowing lands exactly in your own store, you immediately take another turn!", boardConfig: "mancala_free_turn" },
        { text: "The Capture: If your last seed lands in an EMPTY pit on your side, you 'capture' that seed PLUS all seeds in the opposite pit. All go to your store.", boardConfig: "mancala_capture" },
        { text: "Winning the Game: When all pits on one side are empty, the game ends. The other player captures all remaining seeds on their side.", boardConfig: "mancala_end" }
      ],
      houseRules: [
        "Oware Variant: If you land in a pit with seeds, you pick them all up and keep going (Multi-lap sowing).",
        "Peaceful Play: No captures allowed. Only focus on landing in the store for extra turns.",
        "Starting Handicap: The second player starts with 1 extra seed in their store to balance the advantage."
      ],
      kidFriendly: "The Treasure Hunt: Think of the seeds as gems and your store as your treasure chest. Try to count carefully so your 'last gem' falls into your chest for an extra turn!",
      strategies: [
        "Hoarding: Try to empty your pits closest to the opponent's side to prevent them from capturing your seeds.",
        "The Starvation: Keep your side lean. If you have few seeds, the opponent has nothing to 'capture' from you.",
        "The Trap: Leave one pit empty on purpose, then wait for a sowing that lands exactly there to trigger a huge capture."
      ],
      pitfalls: [
        "Feeding the Opponent: Ending your turn with a large number of seeds in a pit opposite an empty opponent pit.",
        "Ignoring the Chain: Missing an opportunity to land in your store and get that free turn.",
        "End-game Blindness: Cleaning your board too early when the opponent still has a massive pile of seeds left."
      ],
      stepByStep: [
        { round: 1, description: "Perfect Start: Pick the 3rd pit from your right (which has 4 seeds). The 4th seed lands in your store. FREE TURN!", boardConfig: "mancala_free_turn" },
        { round: 2, description: "Lapping Around: You pick a pit with 12+ seeds. You will sow all the way around the board and back to your side.", boardConfig: "mancala_sowing_lap" },
        { round: 3, description: "The Grand Theft: Your last seed lands in your empty pit #2. The opponent's pit #2 has 10 seeds. You take all 11!", boardConfig: "mancala_capture" },
        { round: 4, description: "The Sweep: You empty your side first. All remaining seeds on the opponent's side are added to their score. Calculate the winner!", boardConfig: "mancala_end" }
      ],
      scenarios: [
        { title: "The Double Chain", description: "Planning a move that leads to landing in the store, then choosing another pit that also lands in the store.", boardConfig: "mancala_free_turn" },
        { title: "Defensive Sowing", description: "Deliberately choosing a pit that distributes seeds so that you have no empty pits for the opponent to exploit.", boardConfig: "mancala_setup" },
        { title: "The Wipeout", description: "Emptying your side while the opponent is 'heavy' with seeds to force an early end-game bonus.", boardConfig: "mancala_end" }
      ],
      faqs: [
        { question: "What if I have no moves?", answer: "The game ends automatically. The other player gets the rest of the seeds." },
        { question: "Do I skip my own store?", answer: "No, you always drop a seed in your own store if you pass it. You only skip the opponent's store." }
      ]
    },
    'es-ar': {
      overview: "El Mancala (o Kalah) es el 'abuelo' de los juegos de mesa. Es pura estrategia, conteo y 'siembra' de semillas para llenar tu almacén.",
      setup: "Ponés 4 semillas en cada uno de los 12 pocitos. Tu 'Almacén' (Mancala) es el hueco grande a tu derecha. Vos manejás la fila que tenés enfrente.",
      rules: [
        { text: "La Siembra: Elegí cualquier pocito de tu lado. Agarrá todas las semillas y andá soltando de a una en sentido antihorario.", boardConfig: "mancala_setup" },
        { text: "Tu Almacén suma: Cuando siembras, pasás por tu almacén y dejás una semilla. ¡Al almacén del otro lo salteás siempre!", boardConfig: "mancala_store_hit" },
        { text: "Turno Extra (El Combo): Si la ÚLTIMA semilla cae justo en tu almacén, ¡seguís jugando vos! Podés hacer jugadas infinitas.", boardConfig: "mancala_free_turn" },
        { text: "La Captura (El Robo): Si tu última semilla cae en un pocito VACÍO de tu lado, te robás esa semilla y TODAS las del pocito de enfrente.", boardConfig: "mancala_capture" },
        { text: "Final de Partida: Cuando alguien se queda sin semillas en sus pocitos, el juego termina. El otro suma lo que le quedó a su almacén.", boardConfig: "mancala_end" }
      ],
      houseRules: [
        "Siembra Infinita: Si caés en un pocito que ya tenía semillas, las agarrás y seguís sembrando (estilo Oware).",
        "Juego de Caballeros: Se juega sin robos, solo para ver quién tiene mejor puntería con los turnos extra.",
        "Ventaja al Segundo: El que juega segundo arranca con una semilla de regalo en su almacén para equilibrar."
      ],
      kidFriendly: "El Cofre del Tesoro: Imaginá que las semillas son diamantes. Tenés que contar bien para que el último 'diamante' caiga justo en tu cofre y así poder jugar otra vez.",
      strategies: [
        "Vaciá el frente: Intentá que los pocitos que están cerca del almacén del otro estén vacíos para que no te pueda robar.",
        "La Dieta: Mantené tu lado con pocas semillas. Si no tenés nada, el otro no tiene qué capturar.",
        "La Trampa del Vacío: Dejá un pocito vacío a propósito y esperá a que una siembra larga termine justo ahí para un robo masivo."
      ],
      pitfalls: [
        "Darle de comer al otro: Dejar muchas semillas en un pocito que el otro puede capturar fácilmente.",
        "Perder el hilo: No darte cuenta que tenías el número justo para caer en el almacén y ganar un turno extra.",
        "Limpiar el tablero antes de tiempo: Si terminás vos pero el otro tiene 20 semillas en su lado, ¡se las queda todas él!"
      ],
      stepByStep: [
        { round: 1, description: "Arranque Ideal: Elegís tu tercer pocito (tiene 4 semillas). La cuarta cae justo en el almacén. ¡TURNO EXTRA!", boardConfig: "mancala_free_turn" },
        { round: 2, description: "Vuelta al Mundo: Agarrás un pocito con muchas semillas (13 o más) y das toda la vuelta al tablero sembrando.", boardConfig: "mancala_sowing_lap" },
        { round: 3, description: "Robo Maestro: Tu última semilla cae en tu pocito #2 que estaba vacío. El de enfrente tenía 10. ¡Te llevás las 11!", boardConfig: "mancala_capture" },
        { round: 4, description: "Barrida Final: Te quedaste sin semillas. El otro se suma sus sobras y contamos quién es el rey de la cosecha.", boardConfig: "mancala_end" }
      ],
      scenarios: [
        { title: "Encadenar Turnos", description: "Cómo pensar dos o tres jugadas por adelantado para caer siempre en el almacén.", boardConfig: "mancala_free_turn" },
        { title: "Defensa Agresiva", description: "Sembrar de modo que el oponente no tenga huecos donde capturarte.", boardConfig: "mancala_setup" },
        { title: "El Bonus del Final", description: "Por qué a veces es mejor NO terminar la partida si el otro tiene el campo cargado.", boardConfig: "mancala_end" }
      ],
      faqs: [
        { question: "¿Puedo pasar el turno?", answer: "No, si tenés semillas tenés que sembrar sí o sí." },
        { question: "¿El almacén del otro existe?", answer: "Está ahí, pero vos hacés de cuenta que no. Lo saltás como si fuera lava." }
      ]
    }
  }
};

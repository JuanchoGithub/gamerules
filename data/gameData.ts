
import { GameDataMap } from '../types';

export const GAME_CONTENT: GameDataMap = {
  chess: {
    en: {
      overview: "Chess is a magical battle where you command an army of 16 characters. Think of it as a super-slow puzzle where you try to outsmart your friend.",
      manual: "Chess is the ultimate game of wits! It’s played on a grid of 64 squares. One player has a White army, and the other has a Black army. \n\nEvery piece has its own personality and way of moving. Some are fast, like the Queen, and some are tricky, like the Knight who can jump! \n\nThe game ends when one player's King is trapped and can't move away from an attack. This is called 'Checkmate'. If you are just starting, don't worry about winning—focus on how your pieces work together as a team!",
      setup: "Follow these steps to prepare your battlefield from scratch:\n\n1. ORIENTING THE BOARD: Lay the board between you and your opponent. Look at the square in the bottom-right corner closest to you. It MUST be a light-colored (white) square. If it's dark, rotate the board 90 degrees.\n\n2. THE PAWNS (Front Line): Take your 8 small Pawns. Place them in a single row on the second horizontal line of squares from your side. This leaves the very first row empty for now.\n\n3. THE ROOKS (The Corners): Place your two Rooks (they look like little castles) on the two squares at the very ends of your first row (bottom-left and bottom-right).\n\n4. THE KNIGHTS (The Horses): Place your two Knights right next to the Rooks.\n\n5. THE BISHOPS (The Tall Hats): Place your two Bishops right next to the Knights. You now have two squares left in the middle of the first row.\n\n6. THE QUEEN: Important! The Queen always starts on the square that matches her color. If you have the white pieces, put your Queen on the light square in the middle. If you have the black pieces, put her on the dark square. Remember: 'Queen on her own color'.\n\n7. THE KING: Place your King on the last remaining square next to the Queen. He will be on a square of the opposite color (White King on a dark square).",
      rules: [
        { title: "The Pawn (The Brave Soldier)", text: "Pawns move forward 1 square. On their very first move, they can leap 2 squares! They are the only pieces that capture differently: they attack diagonally. If they reach the end of the board, they transform into any piece you want (usually a Queen)!", boardConfig: "chess_pawn_move" },
        { title: "The King (The Team Captain)", text: "The King is the most important piece. He moves only 1 square in any direction. You must protect him! If he's attacked, it's 'Check'. If he can't escape, it's 'Checkmate'.", boardConfig: "chess_king_move" },
        { title: "The Queen (The Super Hero)", text: "The Queen is the most powerful! She can move any number of squares in any straight or diagonal direction. She's like the Rook and Bishop combined.", boardConfig: "chess_queen_move" },
        { title: "The Knight (The Jumping Horse)", text: "Knights are special! They move in an 'L' shape (two squares one way, then one square to the side). They are the only pieces that can jump over other pieces.", boardConfig: "chess_knight_move" },
        { title: "The Rook (The Castle Wall)", text: "Rooks move as many squares as they want, but only in straight lines (up, down, left, right). They are very strong in the end-game!", boardConfig: "chess_rook_bishop" },
        { title: "The Bishop (The Diagonal Scout)", text: "Bishops stay on their own color square for the whole game. They move as many squares as they want, but only on diagonals.", boardConfig: "chess_rook_bishop" }
      ],
      houseRules: [
        "Take-backs: In casual games, allow your child to undo a move if they see a mistake right away.",
        "No Clock: Don't use a timer. Let the thinking process happen naturally!",
        "Touch-to-Move: Once you touch a piece, you must move it. This teaches careful observation."
      ],
      kidFriendly: "Play 'The Pawn Race'! Set up only the pawns. The first player to reach the other side with one pawn wins. This is the best way to learn how pawns move and capture without the confusing pieces.",
      strategies: [
        "Castle Early: It's like building a fortress for your King.",
        "Control the Center: The four squares in the middle are the high ground!",
        "Don't bring your Queen out too early: She might get chased around by weaker pieces."
      ],
      pitfalls: [
        "Leaving a piece 'hanging': Forgetting to protect a piece after you move it.",
        "Scholar's Mate: Losing in just 4 moves. Keep an eye on the f7 square!"
      ],
      stepByStep: [
        { round: 1, description: "The Opening: White moves a center pawn to free the Queen and Bishop. Black does the same.", boardConfig: "chess_round1" },
        { round: 2, description: "Bringing out the Knights: Knights are great at defending the center early on.", boardConfig: "chess_round2" },
        { round: 3, description: "Developing Bishops: Get your Bishops off the back row so they can see the whole board.", boardConfig: "chess_round3" },
        { round: 4, description: "The Castle: Move the King to safety and bring the Rook into the middle.", boardConfig: "chess_round4" }
      ],
      scenarios: [
        { title: "En Passant", description: "A weird rule! If a pawn jumps 2 squares and lands next to yours, you can capture it as if it only moved 1 square.", boardConfig: "chess_en_passant" },
        { title: "Stalemate", description: "When it's your turn, you aren't in 'Check', but you have NO legal moves. The game is a draw (Nobody wins).", boardConfig: "chess_stalemate" },
        { title: "Scholar's Mate", description: "The fastest way to lose! Watch out when your opponent brings the Queen and Bishop together to attack f7.", isPitfall: true, boardConfig: "chess_checkmate" }
      ],
      faqs: [
        { question: "Can a King capture the Queen?", answer: "Yes, as long as the Queen isn't protected by another piece!" },
        { question: "Can I have two Queens?", answer: "Yes! If your pawn reaches the end, you can promote it to a second Queen." }
      ]
    },
    'es-ar': {
      overview: "El ajedrez es como una batalla de superhéroes en un tablero de 64 cuadraditos. ¡Es el juego de ingenio más famoso del mundo!",
      manual: "¡Hola! ¿Listo para convertirte en un Gran Maestro? El ajedrez es genial porque cada pieza tiene su 'superpoder'. \n\nSe juega entre dos personas: uno maneja las blancas y el otro las negras. El objetivo no es comerse todas las piezas, sino atrapar al Rey del otro. Cuando el Rey no tiene escapatoria, se dice 'Jaque Mate'. \n\nAl principio parece difícil, pero lo más importante es aprender cómo se mueve cada personaje y cómo se ayudan entre ellos. ¡Fijate bien antes de mover porque una vez que soltás la pieza, ya está!",
      setup: "Seguí estos pasos para armar tu campo de batalla desde cero:\n\n1. ACOMODAR EL TABLERO: Ponelo entre los dos jugadores. Mirá el casillero de la punta de abajo a tu derecha. SÍ O SÍ tiene que ser de color claro (blanco). Si es oscuro, girá el tablero 90 grados.\n\n2. LOS PEONES (Primera Línea): Agarrá tus 8 peones. Ponelos todos en fila en la segunda línea de cuadraditos contando desde tu lado.\n\n3. LAS TORRES (Las Puntas): Poné las dos torres (las que parecen castillos) en los dos cuadraditos de las puntas de la primera fila (abajo a la izquierda y abajo a la derecha).\n\n4. LOS CABALLOS: Ponelos justo al lado de las torres.\n\n5. LOS ALFILES: Ponelos al lado de los caballos. Ahora te quedan solo dos lugares vacíos en el medio de la primera fila.\n\n6. LA DAMA: ¡Importante! La Dama (Reina) siempre va en el cuadradito de su mismo color. Si jugás con las blancas, ponela en el blanco del medio. Si sos las negras, en el negro. Acordate: 'La Reina en su color'.\n\n7. EL REY: Ponelo en el último lugar que sobra, al lado de su Reina. ¡Ejército listo!",
      rules: [
        { title: "El Peón (El Soldado Valiente)", text: "Avanzan de a uno. En su primer movimiento pueden saltar dos. Comen en diagonal. Si llegan al fondo, ¡se convierten en Reina!", boardConfig: "chess_pawn_move" },
        { title: "El Rey (El Capitán)", text: "Es el que manda. Mueve solo un casillero para cualquier lado. Si lo atacan y no puede escapar, perdés. ¡Cuidalo como a tu vida!", boardConfig: "chess_king_move" },
        { title: "La Dama (La Super Heroína)", text: "¡Es la más poderosa! Mueve todo lo que quiera en cualquier dirección (recto o diagonal).", boardConfig: "chess_queen_move" },
        { title: "El Caballo (El Saltador)", text: "Mueve en 'L' (dos para un lado y uno para el costado). ¡Es el único que puede saltar por encima de otras fichas!", boardConfig: "chess_knight_move" },
        { title: "La Torre (El Muro)", text: "Mueve recto (filas y columnas) todo lo que quiera. Son muy fuertes al final del juego.", boardConfig: "chess_rook_bishop" },
        { title: "El Alfil (El Explorador)", text: "Mueve solo en diagonal y nunca cambia de color de casillero.", boardConfig: "chess_rook_bishop" }
      ],
      houseRules: [
        "Pieza tocada, pieza movida: Si la tocaste, la tenés que jugar. ¡Nada de arrepentirse!",
        "Vale Cuatro: Si juegan varias partidas, el que perdió la anterior arranca con blancas.",
        "Alfajor de premio: ¡El que gana elige qué merendar!"
      ],
      kidFriendly: "¡Guerra de Peones! Pongan solo los peones. El primero que llega al otro lado del tablero gana un premio. Es la mejor forma de aprender cómo avanzan y cómo comen sin marearse con tantas piezas.",
      strategies: [
        "Enrocate rápido: Es como meter al Rey en un castillo de piedra.",
        "Dominá el centro: Los 4 cuadraditos del medio son como la cima de la montaña. ¡El que está ahí manda!",
        "No saqués la Reina de entrada: Te la van a pasear por todo el tablero y la podés perder."
      ],
      pitfalls: [
        "Colgar una pieza: Dejar una pieza regalada porque te olvidaste de que te la podían comer.",
        "Mate del Pastor: Te ganan en 4 jugadas si no prestás atención al peón que está al lado del Rey."
      ],
      stepByStep: [
        { round: 1, description: "La Apertura: Movés un peón del medio para que la Reina y el Alfil puedan salir a jugar.", boardConfig: "chess_round1" },
        { round: 2, description: "Salen los Caballos: Son ideales para defender el centro al principio.", boardConfig: "chess_round2" },
        { round: 3, description: "Desarrollo de Alfiles: Sacalos de la primera fila para que vean todo el tablero.", boardConfig: "chess_round3" },
        { round: 4, description: "El Enroque: Ponés al Rey a salvo y traés la Torre al medio de la batalla.", boardConfig: "chess_round4" }
      ],
      scenarios: [
        { title: "Peón al Paso", description: "Una regla loca: si un peón del otro salta dos lugares y queda al lado del tuyo, ¡te lo podés comer como si hubiera movido uno solo!", boardConfig: "chess_en_passant" },
        { title: "Tablas (Empate)", description: "Cuando no te podés mover pero no estás en Jaque. Nadie gana, ¡se dan la mano y otra partida!", boardConfig: "chess_stalemate" },
        { title: "Mate del Pastor", description: "¡Cuidado! Si te descuidás, la Reina y el Alfil te liquidan en un segundo al principio.", isPitfall: true, boardConfig: "chess_checkmate" }
      ],
      faqs: [
        { question: "¿El Rey puede comer a la Reina?", answer: "¡Sí! Mientras la Reina no esté protegida por otra pieza, el Rey se la puede comer." },
        { question: "¿Puedo tener dos Reinas?", answer: "¡Claro! Si tu peón llega al final, lo cambiás por otra Reina y hacés desastres." }
      ]
    }
  },
  checkers: {
    en: {
      overview: "Checkers is a game of hunger! You want to jump over your opponent's pieces and capture them all.",
      manual: "In Checkers, you start with 12 pieces. Everyone stays on the DARK squares. You can only move forward diagonally. \n\nBut here's the fun part: if an enemy piece is in front of you and there's an empty space behind it, you MUST jump over them and take their piece! It's like a game of leapfrog where you keep the frog you jumped over. \n\nIf you reach the other side, you become a KING and get a second piece stacked on top. Kings can move backwards too!",
      setup: "Preparing the Checkers board is simple but precise:\n\n1. THE SQUARES: Look at the board. You will ONLY use the dark-colored squares for the entire game. Orient the board so that you have a dark square in your bottom-left corner.\n\n2. THE PIECES: You have 12 round checkers. Place them ONLY on the dark squares.\n\n3. THE ROWS: Fill the first 3 rows of dark squares on your side. Row 1 (closest to you) will have 4 pieces, Row 2 will have 4, and Row 3 will have 4.\n\n4. THE MIDDLE: This setup leaves two empty horizontal rows in the very center of the board. This is 'No Man's Land' where you'll first meet your opponent.",
      rules: [
        { title: "Moving Forward", text: "Regular pieces always move diagonally forward one square at a time.", boardConfig: "checkers_move" },
        { title: "The Jump", text: "If you can jump an enemy piece, you MUST do it. If you land and can jump another one, you keep going!", boardConfig: "checkers_jump" },
        { title: "Becoming King", text: "When you reach the last row, your piece is 'Crowned'. It can now move and jump backwards.", boardConfig: "checkers_king_move" },
        { title: "Winning", text: "You win by capturing all enemy pieces or blocking them so they can't move.", boardConfig: "checkers_setup" }
      ],
      houseRules: [
        "The Huff: If a player forgets to jump, the opponent can 'blow' (huff) that piece off the board.",
        "Flying Kings: Kings can move any distance on a diagonal line (like a Bishop in Chess).",
        "Multiple Jumps: If you have two ways to jump, you must take the path that captures the most pieces."
      ],
      kidFriendly: "Let everyone move backwards from the start! It makes the game much faster and easier for younger kids to understand the 'capture' logic without getting stuck.",
      strategies: [
        "Protect the Back Row: This prevents your opponent from getting Kings.",
        "Control the Center: Don't stay on the edges where you have fewer move options.",
        "The Sacrifice: Sometimes giving up one piece helps you capture two!"
      ],
      pitfalls: [
        "Forgetting mandatory jumps.",
        "Moving too many pieces from the back row too early.",
        "Leaving gaps where the opponent can double-jump you."
      ],
      stepByStep: [
        { round: 1, description: "Initial setup moves. Everyone moves towards the center.", boardConfig: "checkers_round1" },
        { round: 2, description: "The first contact. Someone is forced to jump!", boardConfig: "checkers_round2" },
        { round: 3, description: "Setting a trap for a double jump.", boardConfig: "checkers_round3" },
        { round: 4, description: "Breaking through to get a King.", boardConfig: "checkers_round4" }
      ],
      scenarios: [
        { title: "Double Jump", description: "The best feeling in checkers! Jumping two or three pieces in one go.", boardConfig: "checkers_double" },
        { title: "The Blockade", description: "You don't always have to capture; sometimes you win by making sure the other player can't move a single piece.", boardConfig: "checkers_setup" }
      ],
      faqs: [
        { question: "Is jumping really mandatory?", answer: "Yes, in official rules, you don't have a choice!" }
      ]
    },
    'es-ar': {
      overview: "¡Las Damas son pura hambre! Tenés que saltar por encima de las fichas del otro y comértelas todas.",
      manual: "En las Damas, arrancás con 12 fichas. Todos se quedan siempre en los cuadraditos OSCUROS. Al principio, solo podés avanzar en diagonal. \n\nPero lo más divertido es esto: si tenés una ficha del otro adelante y hay un hueco atrás, ¡TENÉS que saltar y comértela! Es obligatorio. Si después de saltar podés volver a saltar a otra ficha, seguís viaje hasta que no quede nadie. \n\nSi llegás al fondo, te convertís en REINA y te ponen otra ficha arriba. ¡Las Reinas pueden ir para atrás también!",
      setup: "Preparar el tablero de Damas es fácil pero tiene su truco:\n\n1. LOS CASILLEROS: Mirá el tablero. SOLO vas a usar los cuadraditos oscuros en todo el juego. Acomodalo para que tengas un cuadradito OSCURO en tu esquina de abajo a la izquierda.\n\n2. LAS FICHAS: Tenés 12 fichas redondas. Ponelas SÓLO en los cuadraditos oscuros.\n\n3. LAS FILAS: Llená las primeras 3 filas de cuadraditos oscuros de tu lado. La fila 1 (la más cerca tuyo) tiene 4 fichas, la fila 2 tiene 4 y la fila 3 tiene 4.\n\n4. EL MEDIO: Te tienen que quedar dos filas vacías en el centro del tablero. Esa es la 'tierra de nadie' donde se van a cruzar con el otro jugador.",
      rules: [
        { title: "Avanzar", text: "Las fichas comunes siempre van en diagonal hacia adelante, de a un cuadradito.", boardConfig: "checkers_move" },
        { title: "El Salto (Comer)", text: "Si podés comer, tenés que hacerlo. ¡Es ley! Si podés seguir comiendo en el mismo turno, seguís saltando.", boardConfig: "checkers_jump" },
        { title: "La Reina", text: "Cuando llegás al fondo, te coronan. Ahora podés moverte para adelante y para atrás como un campeón.", boardConfig: "checkers_king_move" },
        { title: "Ganar", text: "Gana el que se come todas las fichas del otro o el que lo deja bloqueado sin poder mover.", boardConfig: "checkers_setup" }
      ],
      houseRules: [
        "La Soplada: Si el otro no comió cuando podía, ¡le soplás la ficha y se la sacás del tablero!",
        "Dama Voladora: La Reina puede mover todos los casilleros que quiera en diagonal (estilo Alfil).",
        "Comer el máximo: Si tenés dos opciones para comer, tenés que elegir la que te permita comer más piezas."
      ],
      kidFriendly: "¡Cualquiera puede ir para atrás! Para los más chiquitos es mejor dejar que todas las fichas vuelvan, así el juego no se traba tanto y es más movido.",
      strategies: [
        "No desarmés la última fila: Si sacás las de atrás, el otro te va a meter Reinas enseisguida.",
        "Mantené el centro: No te vayas a los costados porque tenés menos opciones para saltar.",
        "Regalá una ficha: A veces conviene perder una para armar una jugada y comerle dos al otro."
      ],
      pitfalls: [
        "Olvidarse de que comer es obligatorio.",
        "Dejar huecos para que el otro te haga un salto doble.",
        "Quedarse sin fichas en el medio del tablero."
      ],
      stepByStep: [
        { round: 1, description: "Movimientos de apertura. Todos avanzan hacia el medio.", boardConfig: "checkers_round1" },
        { round: 2, description: "Primer cruce. Alguien está obligado a comer.", boardConfig: "checkers_round2" },
        { round: 3, description: "Preparando una trampa para comer dos.", boardConfig: "checkers_round3" },
        { round: 4, description: "Llegando al fondo para coronar Reina.", boardConfig: "checkers_round4" }
      ],
      scenarios: [
        { title: "El Salto Doble", description: "¡La mejor sensación! Comer dos o tres fichas de un solo tiro.", boardConfig: "checkers_double" },
        { title: "La Bloqueada", description: "No siempre hace falta comer todo; a veces ganás simplemente dejando al otro sin ningún movimiento posible.", boardConfig: "checkers_setup" }
      ],
      faqs: [
        { question: "¿Es verdad que hay que comer sí o sí?", answer: "¡Sí! En las reglas oficiales no podés elegir, tenés que saltar." }
      ]
    }
  },
  backgammon: {
    en: {
      overview: "Backgammon is a race where 15 pieces run toward their 'Home' while trying not to get kicked out by the opponent.",
      manual: "Imagine two athletes running a circular track in opposite directions. That's Backgammon! \n\nYou roll two dice. Each die tells you how many triangles (steps) you can move your pieces. You want to get all 15 of your checkers into your 'Home Board' and then off the board completely.\n\nBut here's the catch: if you leave a checker alone on a triangle (called a 'Blot'), your opponent can land on it. Your piece gets 'hit' and sent to the BAR—the wooden divider in the middle of the board. You must then restart that piece from the very beginning!",
      setup: "Backgammon has a very specific setup. Let's orient ourselves first:\n\n1. THE BOARD REGIONS: The board is split in half by a vertical strip called the BAR. \n   - Your HOME BOARD (Inner Board) is the group of 6 triangles on your BOTTOM-RIGHT side.\n   - Your OUTER BOARD is the group of 6 triangles on your BOTTOM-LEFT side.\n   - The opponent's Home Board is directly across from yours (TOP-RIGHT).\n\n2. PLACING THE PIECES (Assuming you are moving towards your bottom-right home):\n   - Point 24 (Top-Left corner): Place 2 checkers. This is your starting point.\n   - Point 13 (Bottom-Left corner triangle): Place 5 checkers.\n   - Point 8 (5th triangle from left, bottom side): Place 3 checkers.\n   - Point 6 (1st triangle from the Bar, bottom-right side): Place 5 checkers.\n\n3. MOVEMENT DIRECTION: You move your pieces in a horseshoe shape: starting from the TOP-LEFT, moving across the TOP to the right, then jumping down to the BOTTOM-RIGHT and heading toward the BAR. Your opponent does the exact opposite!",
      rules: [
        { title: "Moving with Dice", text: "Roll 2 dice. If you roll a 3 and a 5, you can move one piece 3 spaces and another 5, or one piece a total of 8. If you roll DOUBLE (e.g., 4-4), you move FOUR times!", boardConfig: "bg_setup" },
        { title: "The Bar & Re-entry", text: "If your piece is 'hit', it sits on the BAR (the center strip). You cannot move any other pieces until this piece 'enters' the opponent's home board via a dice roll.", boardConfig: "bg_bar_reentry" },
        { title: "Hitting a Blot", text: "Landing on a triangle with only ONE opponent piece sends it to the bar. Triangles with 2 or more pieces are 'safe' and cannot be landed on by the opponent.", boardConfig: "bg_hit" },
        { title: "Bearing Off", text: "Once all 15 pieces are inside your 6 Home Board triangles, you can start removing them from the board. First to remove all 15 wins!", boardConfig: "bg_bearing_off" }
      ],
      houseRules: [
        "The Crawford Rule: No doubling allowed for one game when someone is about to win the match.",
        "Automatic Doubles: If you both roll the same number for the first move, double the points!",
        "Speedy Start: Allow players to move pieces into their home board faster to reduce game time."
      ],
      kidFriendly: "The 'Safe Journey' Mode: Tell kids that two pieces together are 'holding hands' and are safe. If a piece is alone, it's 'lost' and needs to go back to the start (the Bar) to find its way again.",
      strategies: [
        "Build Anchors: Try to get two pieces on triangles in your opponent's home board so you have a safe place to return from the bar.",
        "The Prime: Try to occupy 6 triangles in a row. This creates a wall the opponent cannot jump over!",
        "Don't leave Blots: Try to always move pieces in pairs so they are never 'hit'."
      ],
      pitfalls: [
        "Leaving a lone piece near the opponent's pieces.",
        "Getting 'trapped' in the opponent's home board because you didn't move early enough.",
        "Forgetting that you move in opposite directions!"
      ],
      stepByStep: [
        { round: 1, description: "Roll the dice. Move your back-most pieces forward toward your outer board.", boardConfig: "bg_setup" },
        { round: 2, description: "The opponent leaves a 'Blot' (one piece alone). You land on it! It goes to the Bar.", boardConfig: "bg_hit" },
        { round: 3, description: "The opponent rolls to enter from the Bar. They land in your home board.", boardConfig: "bg_bar_reentry" },
        { round: 4, description: "You have all pieces home. Roll and remove them (Bearing off).", boardConfig: "bg_bearing_off" }
      ],
      scenarios: [
        { title: "The Bar Escape", description: "When your piece is on the Bar, you must roll a number that lands on an empty triangle in the opponent's home board (the top-right 6 triangles).", boardConfig: "bg_bar_reentry" },
        { title: "The 6-Point Prime", description: "A solid wall of 6 points. No piece can jump over this! It's a complete blockade.", boardConfig: "bg_prime" }
      ],
      faqs: [
        { question: "What is the 'Bar' exactly?", answer: "It's the vertical strip in the center that separates the left and right halves of the board. It's the 'jail' for hit pieces." }
      ]
    },
    'es-ar': {
      overview: "El Backgammon es una carrera donde 15 fichas corren hacia su 'Casa' mientras intentan que el otro no las eche del tablero.",
      manual: "¡Imaginá a dos atletas corriendo en una pista circular en direcciones opuestas! Eso es el Backgammon. \n\nTirás dos dados. Cada dado te dice cuántos triángulos (pasos) podés mover tus fichas. Tu meta es meter tus 15 fichas en tu 'Tablero Interno' (tu Casa) y después sacarlas todas del tablero.\n\nPero ojo: si dejás una ficha sola en un triángulo, tu oponente puede caer ahí. Tu ficha es 'golpeada' y mandada al BAR (la franja de madera en el medio del tablero). ¡Vas a tener que empezar el recorrido con esa ficha desde cero!",
      setup: "El Backgammon tiene un armado muy específico. Vamos a ubicarnos:\n\n1. LAS ZONAS DEL TABLERO: El tablero se divide al medio por una franja llamada BAR. \n   - Tu TABLERO INTERNO (Casa) son los 6 triángulos abajo a la DERECHA.\n   - Tu TABLERO EXTERNO son los 6 triángulos abajo a la IZQUIERDA.\n   - La Casa de tu rival está justo enfrente de la tuya (ARRIBA a la derecha).\n\n2. DÓNDE PONER LAS FICHAS (Suponiendo que vas hacia tu casa abajo a la derecha):\n   - Punto 24 (Esquina arriba-izquierda): Poné 2 fichas. Ahí arrancás.\n   - Punto 13 (Triángulo de la punta abajo-izquierda): Poné 5 fichas.\n   - Punto 8 (5to triángulo desde la izquierda, lado de abajo): Poné 3 fichas.\n   - Punto 6 (1er triángulo pegado al Bar, lado abajo-derecha): Poné 5 fichas.\n\n3. DIRECCIÓN DEL VIAJE: Tus fichas se mueven en forma de herradura: arrancan ARRIBA-IZQUIERDA, corren hacia la derecha por arriba, saltan al lado de ABAJO-DERECHA y vuelven hacia la izquierda (hacia el Bar). ¡Tu rival hace exactamente lo contrario!",
      rules: [
        { title: "Mover con Dados", text: "Tirás 2 dados. Si sacás un 3 y un 5, movés una ficha 3 lugares y otra 5, o una sola 8. Si sacás DOBLES (ej. 2-2), ¡movés CUATRO veces ese número!", boardConfig: "bg_setup" },
        { title: "El Bar y Reingreso", text: "Si te comen una ficha, va al BAR (el medio). No podés mover ninguna otra hasta que esa ficha vuelva a entrar al tablero por la casa del rival.", boardConfig: "bg_bar_reentry" },
        { title: "Comer fichas solas", text: "Si caés en un triángulo con UNA sola ficha del otro, la mandás al Bar. Si hay 2 o más fichas, ese lugar es seguro y nadie te puede comer.", boardConfig: "bg_hit" },
        { title: "Sacar Fichas", text: "Cuando tenés las 15 fichas en tu Casa (los 6 triángulos de abajo-derecha), podés empezar a sacarlas del tablero. El primero que saca las 15 gana.", boardConfig: "bg_bearing_off" }
      ],
      houseRules: [
        "Regla de Crawford: No se puede doblar la apuesta por un juego cuando alguien está por ganar el partido.",
        "Dobles de entrada: Si empatan en la primera tirada, la partida ya vale doble de una.",
        "Carrera Rápida: Dejá que las fichas entren más fácil a la casa para que el juego sea más ágil."
      ],
      kidFriendly: "El Viaje Seguro: Deciles a los chicos que dos fichas juntas están 'agarradas de la mano' y nadie les puede hacer nada. Si una está sola, está 'perdida' y tiene que volver al Bar para encontrar el camino de nuevo.",
      strategies: [
        "Hacé Anclas: Tratá de tener dos fichas juntas en la casa del rival para tener un lugar seguro donde volver si te mandan al Bar.",
        "La Muralla: Intentá ocupar 6 triángulos seguidos. Esto crea una pared que tu rival no puede saltar ni con un milagro.",
        "No te regales: Tratá de mover siempre de a pares para que nunca te coman fichas solas."
      ],
      pitfalls: [
        "Dejar una ficha sola cerca de las fichas del otro.",
        "Quedarse 'encerrado' en la casa del rival por no salir a tiempo.",
        "¡Olvidarse de que los dos corren para lados diferentes!"
      ],
      stepByStep: [
        { round: 1, description: "Tirás los dados y movés tus fichas de más atrás hacia adelante.", boardConfig: "bg_setup" },
        { round: 2, description: "Tu rival deja una ficha sola. ¡Caés justo ahí y la mandás al medio!", boardConfig: "bg_hit" },
        { round: 3, description: "Tu rival tira los dados para volver a entrar desde el Bar.", boardConfig: "bg_bar_reentry" },
        { round: 4, description: "Ya tenés todas en tu casa. Ahora las empezás a sacar para ganar.", boardConfig: "bg_bearing_off" }
      ],
      scenarios: [
        { title: "Escape del Bar", description: "Cuando tenés una ficha en el Bar, tenés que sacar un número que caiga en un triángulo vacío de la casa del rival (los 6 de arriba a la derecha).", boardConfig: "bg_bar_reentry" },
        { title: "La Muralla de 6", description: "Una fila de 6 triángulos ocupados. Ninguna ficha puede saltar esto. ¡Es un bloqueo total!", boardConfig: "bg_prime" }
      ],
      faqs: [
        { question: "¿Qué es el 'Bar' exactamente?", answer: "Es la franja vertical en el medio del tablero que separa la izquierda de la derecha. Es como la 'cárcel' para las fichas comidas." }
      ]
    }
  },
  mancala: {
    en: {
      overview: "Mancala is a game of seeds and stores. It's about counting and 'sowing' your gems to fill your treasure chest.",
      manual: "Mancala is one of the oldest games in the world! You have two rows of small pits and two large 'Stores'. \n\nYou pick up all the seeds in one of your pits and 'sow' them one by one into the next pits. If your last seed lands in your Store, you get to play AGAIN! \n\nIf your last seed lands in an empty pit on your side, you get to 'capture' all the seeds in the pit opposite it. It's like a math puzzle where you try to get as many seeds into your Store as possible.",
      setup: "Set up your Mancala board (often called a 'pit and pebble' game):\n\n1. THE BOARD: Place the board horizontally between the two players. It has two rows of 6 small holes (pits) and two large holes at the ends (Stores).\n\n2. YOUR SIDE: The row of 6 pits closest to you is yours. Your 'Store' is the large one to your right.\n\n3. THE SEEDS: Place 4 seeds (could be pebbles, beads, or beans) into each of the 12 small pits. \n\n4. THE GOAL: Your stores start empty. The game is all about moving these seeds from the small pits into your large treasure Store!",
      rules: [
        { title: "Sowing Seeds", text: "Pick any pit on your side. Take all seeds and drop them one-by-one in a counter-clockwise circle.", boardConfig: "mancala_setup" },
        { title: "Free Turns", text: "If your last seed lands in your own Store, you take another turn immediately!", boardConfig: "mancala_free_turn" },
        { title: "The Capture", text: "If your last seed lands in an EMPTY pit on your side, you take that seed AND all seeds from the opponent's opposite pit.", boardConfig: "mancala_capture" },
        { title: "Game Over", text: "When one player has no seeds left in their pits, the game ends. The other player keeps whatever is left on their side.", boardConfig: "mancala_end" }
      ],
      houseRules: [
        "Handicap: Start with fewer seeds in one player's pits to make it easier for a beginner.",
        "No Captures: For a peaceful game, play without the capture rule.",
        "The Big Store: If you land in your store, get 2 seeds from the bank as a bonus."
      ],
      kidFriendly: "The Gem Collector: Use colorful beads or stones. Tell the kids they are 'planting' magic seeds and trying to get them into their 'treasure chest' (Store). Focus on the 'Free Turn' rule as it's the most rewarding part.",
      strategies: [
        "Target the Store: Always look for a pit that has the exact number of seeds needed to land in your Store.",
        "Empty your side: If you empty your pits first, the game ends, and you might catch the opponent with a lot of seeds!",
        "Defend your pits: Don't leave a single seed in a pit if the opponent has an empty one opposite it."
      ],
      pitfalls: [
        "Ignoring the free turn possibility.",
        "Feeding the opponent: Sowing too many seeds into their side of the board.",
        "Cleaning your board too early when the opponent still has a huge pile of seeds."
      ],
      stepByStep: [
        { round: 1, description: "Starting move that lands in the Store. Free Turn!", boardConfig: "mancala_free_turn" },
        { round: 2, description: "A long sowing that goes all the way around the board.", boardConfig: "mancala_sowing_lap" },
        { round: 3, description: "A capture! Landing in an empty pit to steal seeds.", boardConfig: "mancala_capture" },
        { round: 4, description: "End game: Counting the seeds in the stores.", boardConfig: "mancala_end" }
      ],
      scenarios: [
        { title: "The Chain Reaction", description: "Making multiple free turns in a row by counting carefully.", boardConfig: "mancala_free_turn" },
        { title: "The Wipeout", description: "Emptying your entire row to end the game while the opponent is still 'heavy'.", boardConfig: "mancala_end" }
      ],
      faqs: [
        { question: "Do I drop seeds in the opponent's store?", answer: "No! You always skip the opponent's store." }
      ]
    },
    'es-ar': {
      overview: "El Mancala es el juego de la cosecha. Tenés que sembrar tus semillas para llenar tu almacén de tesoros.",
      manual: "¡El Mancala es uno de los juegos más viejos de la humanidad! Tenés dos filas de pocitos y dos 'Almacenes' grandes a los costados. \n\nElegís un pocito de tu lado, agarrás todas las semillas y las vas 'sembrando' de a una en los siguientes huecos. Si la última semilla cae justo en tu Almacén, ¡seguís jugando vos! \n\nSi la última cae en un pocito vacío de tu lado, te 'robás' todas las del oponente que están enfrente. Es como un rompecabezas de números donde gana el que más semillas junta en su almacén.",
      setup: "Prepará tu tablero de Mancala (un juego de 'pocitos y piedras'):\n\n1. EL TABLERO: Ponelo de forma horizontal entre los dos jugadores. Tiene dos filas de 6 pocitos chicos y dos grandes en las puntas (Almacenes).\n\n2. TU LADO: La fila de 6 pocitos que tenés más cerca es la tuya. Tu 'Almacén' es el grande que tenés a tu DERECHA.\n\n3. LAS SEMILLAS: Poné 4 semillas (pueden ser piedritas, porotos o cuentas) en cada uno de los 12 pocitos chicos.\n\n4. EL OBJETIVO: Los almacenes arrancan vacíos. La idea es ir moviendo esas semillas para meterlas en tu cofre del tesoro (tu Almacén).",
      rules: [
        { title: "Sembrar", text: "Elegí un pocito de tu lado. Agarrá todo y soltá de a una en sentido antihorario.", boardConfig: "mancala_setup" },
        { title: "Turno Extra", text: "Si la última semilla cae en tu Almacén, ¡jugás otra vez de una!", boardConfig: "mancala_free_turn" },
        { title: "La Captura", text: "Si la última cae en un pocito VACÍO de tu lado, te llevás esa y todas las de enfrente.", boardConfig: "mancala_capture" },
        { title: "Final", text: "Cuando alguien se queda sin semillas en sus pocitos, se termina todo. El otro se queda lo que le sobró.", boardConfig: "mancala_end" }
      ],
      houseRules: [
        "Siembra Loca: Si caés en un pocito con semillas, las agarrás y seguís viaje.",
        "Sin robos: Para jugar tranquilos, saquen la regla de la captura.",
        "Regalo de inicio: El que va segundo arranca con una semilla más."
      ],
      kidFriendly: "El Cofre del Tesoro: Usen piedritas de colores. Diganles a los chicos que están plantando diamantes y que tienen que llegar a su cofre. Lo más divertido es cuando les sale el turno extra.",
      strategies: [
        "Apuntá al Almacén: Siempre buscá el pocito que tenga el número justo para caer en el Almacén.",
        "Vaciá tu lado: Si te quedás sin nada rápido, podés ganar por sorpresa.",
        "Cuidá tus huecos: No dejes semillas solas si el otro tiene un pocito vacío enfrente."
      ],
      pitfalls: [
        "No darse cuenta de que podés repetir turno.",
        "Pasarle demasiadas semillas al otro lado.",
        "Terminar muy rápido cuando el otro todavía tiene una montaña de semillas."
      ],
      stepByStep: [
        { round: 1, description: "Jugada inicial que cae en el Almacén. ¡Repite!", boardConfig: "mancala_free_turn" },
        { round: 2, description: "Una siembra larga que da toda la vuelta.", boardConfig: "mancala_sowing_lap" },
        { round: 3, description: "¡Captura! Caer en un hueco vacío para robar.", boardConfig: "mancala_capture" },
        { round: 4, description: "El recuento final de semillas.", boardConfig: "mancala_end" }
      ],
      scenarios: [
        { title: "Combo de Turnos", description: "Cómo encadenar dos o tres jugadas seguidas contando bien.", boardConfig: "mancala_free_turn" },
        { title: "La Barrida", description: "Terminar tu lado justo cuando el otro está cargado de semillas.", boardConfig: "mancala_end" }
      ],
      faqs: [
        { question: "¿Paso por el almacén del otro?", answer: "¡No! Ese lo salteás siempre como si fuera lava." }
      ]
    }
  },
  escoba: {
    en: {
      overview: "Escoba is the classic Spanish card game where you sweep the table! Try to sum up to 15 to win.",
      manual: "Escoba is a fantastic game for practicing math! You use a Spanish deck of 40 cards. \n\nEach player gets 3 cards, and 4 are placed face-up on the table. Your goal is to take one card from your hand and combine it with cards on the table to sum exactly 15. \n\nIf you manage to clear all the cards from the table in one go, you shout 'ESCOBA!' (Broom!) and get a point. At the end, you count who has the most cards, most golds, and most 7s.",
      setup: "To set up 'Escoba del 15', you need a 'Mazo Español' (Spanish Deck):\n\n1. THE DECK: Use 40 cards. There are four suits: Oros (Golds/Coins), Copas (Cups), Espadas (Swords), and Bastos (Clubs). Numbers go from 1 to 7, and then 10, 11, and 12.\n\n2. THE VALUES:\n   - Cards 1 to 7 are worth their face value.\n   - 10 (Sota/Jack) is worth 8 points.\n   - 11 (Caballo/Knight) is worth 9 points.\n   - 12 (Rey/King) is worth 10 points.\n\n3. THE DEAL: One player deals 3 cards to each person. Then, place 4 cards face-up in the middle of the table.\n\n4. THE POT: Place the remaining deck face-down. This is the draw pile for the next round of dealing once everyone uses their 3 cards.",
      rules: [
        { title: "The Sum of 15", text: "Combine one card from your hand with any number of table cards to equal 15.", boardConfig: "escoba_sum15" },
        { title: "The Escoba", text: "If you clear the table completely, you get an Escoba point! Turn one of your captured cards face-up to remember.", boardConfig: "escoba_clear" },
        { title: "Scoring", text: "Points go to: Most cards, Most Golds, The 7 of Golds, Most 7s, and each Escoba.", boardConfig: "escoba_setup" },
        { title: "Last Hand", text: "The person who made the very last capture takes all remaining cards on the table.", boardConfig: "escoba_setup" }
      ],
      houseRules: [
        "Escoba of the Dealer: If the 4 starting cards sum to 15, the dealer gets an Escoba right away!",
        "Double Points: The 7 of Golds counts as two points instead of one.",
        "Penalty: If you miss a 15 you could have made, you lose a point."
      ],
      kidFriendly: "The Math Challenge: Encourage kids to find all possible ways to reach 15. 'I have a 7, what do I need from the table?'. It makes mental math fun!",
      strategies: [
        "Control the 7s: They are the keys to winning most of the end-game points.",
        "Avoid leaving a '5': If there's a 5 on the table, it's very easy for the next player to sum to 15 with a 10.",
        "Go for Golds: Collecting the gold suit (oros) is a guaranteed point."
      ],
      pitfalls: [
        "Discarding a card that helps the opponent make an Escoba.",
        "Forgetting to check the sum of ALL cards on the table.",
        "Not keeping track of the 7 of Golds."
      ],
      stepByStep: [
        { round: 1, description: "Hand has 7. Table has 1, 2, 5. 7+1+2+5 = 15! Capture!", boardConfig: "escoba_sum15" },
        { round: 2, description: "Table cleared! ESCOBA!", boardConfig: "escoba_clear" }
      ],
      scenarios: [
        { title: "The 7 of Golds", description: "The most important card. If you see it, take it at all costs!", boardConfig: "escoba_setup" },
        { title: "Building an Escoba", description: "Sometimes it's better to wait and let the table grow if you think you can clear it later.", boardConfig: "escoba_clear" }
      ],
      faqs: [
        { question: "What if I can't make 15?", answer: "You must just throw one card to the table." }
      ]
    },
    'es-ar': {
      overview: "¡La Escoba es el juego de cartas más argento que hay! Sumá 15, barré la mesa y ganá puntos.",
      manual: "¡La Escoba es genial para jugar en familia! Se usa el mazo español de 40 cartas. \n\nSe reparten 3 a cada uno y se ponen 4 en la mesa. Tu misión es agarrar una de tu mano y sumarla con las de la mesa para que den justo 15. \n\nSi lográs llevarte todas las cartas de la mesa de un solo tiro, ¡gritás 'ESCOBA!' y sumás un punto. Al final se cuentan quién tiene más cartas, más oros, el 7 de oros y los 7 en general. ¡Es pura cuenta y picardía!",
      setup: "Para jugar a la Escoba del 15 necesitás un Mazo Español:\n\n1. EL MAZO: Se usan 40 cartas. Hay cuatro palos: Oros, Copas, Espadas y Bastos. Los números van del 1 al 7, y después saltan al 10, 11 y 12.\n\n2. LOS VALORES:\n   - Las cartas del 1 al 7 valen lo que dice el número.\n   - El 10 (Sota) vale 8 puntos.\n   - El 11 (Caballo) vale 9 puntos.\n   - El 12 (Rey) vale 10 puntos.\n\n3. EL REPARTO: El que reparte da 3 cartas a cada jugador. Después, pone 4 cartas boca arriba en el centro de la mesa.\n\n4. EL POZO: El resto del mazo queda boca abajo a un costado. Cuando todos usan sus 3 cartas, se vuelven a repartir 3 más hasta que se acabe el mazo.",
      rules: [
        { title: "Sumar 15", text: "Usás una de tu mano y las que quieras de la mesa para llegar a 15.", boardConfig: "escoba_sum15" },
        { title: "Hacer Escoba", text: "Si dejás la mesa vacía, ¡hiciste escoba! Poné una carta cruzada en tu pila para marcar el punto.", boardConfig: "escoba_clear" },
        { title: "Los Puntos", text: "Se suma por: Cartas, Oros, el 7 de Oros, los Sietes y cada Escoba.", boardConfig: "escoba_setup" },
        { title: "Última Mano", text: "El último que levantó algo se lleva lo que sobró en la mesa al final.", boardConfig: "escoba_setup" }
      ],
      houseRules: [
        "Escoba de mano: Si las 4 de la mesa ya suman 15, el que repartió se la lleva de una.",
        "Partido a 21: El primero que llega a 21 puntos totales gana el partido.",
        "Mala jugada: Si tenés para sumar 15 y no lo hacés, te pueden penalizar."
      ],
      kidFriendly: "Cuentas Rápidas: Es ideal para que los chicos practiquen las sumas. 'Si tengo un 8, ¿cuánto me falta?'. Ayudalos a buscar todas las combinaciones posibles en la mesa.",
      strategies: [
        "No regales escobas: No tires una carta que deje la mesa servida para que el otro llegue a 15 fácil.",
        "Cuidá el 7 de oros: Es el 'Siete de Velas', la carta que más puntos te puede dar.",
        "Juntá los sietes: Son claves para ganar la categoría de 'Sietes'."
      ],
      pitfalls: [
        "Tirar un 5 cuando en la mesa hay un Rey (10). ¡Escoba regalada!",
        "Olvidarse de contar bien y tirar una carta que no suma nada.",
        "Perder el hilo de cuántos oros te llevaste."
      ],
      stepByStep: [
        { round: 1, description: "Tenés un 7. En la mesa hay un 8. 7+8=15. ¡Adentro!", boardConfig: "escoba_sum15" },
        { round: 2, description: "¡Mesa limpia! ¡ESCOBA!", boardConfig: "escoba_clear" }
      ],
      scenarios: [
        { title: "El Siete de Velas", description: "Es el 7 de oros. Vale por punto de oros, punto de 7s y el punto propio. ¡La más buscada!", boardConfig: "escoba_setup" },
        { title: "La Trampa del 5", description: "Si tirás un 5, asegurate de que en la mesa no haya nada que sume 10.", boardConfig: "escoba_sum15" }
      ],
      faqs: [
        { question: "¿Qué pasa si no sumo 15?", answer: "Tenés que tirar una carta a la mesa y esperar al próximo turno." }
      ]
    }
  },
  chinchon: {
    en: {
      overview: "Chinchón is a game of sets and runs. Try to group your cards and be the first to reach zero points!",
      manual: "Chinchón is like a card puzzle. You get 7 cards and you want to organize them into 'Sets' (three of the same number) or 'Runs' (three numbers in a row of the same suit). \n\nEvery turn you take a card and throw one away. When you have almost everything organized, you can 'Close' the game. If you manage to get all 7 cards in one long run, you made a CHINCHÓN and you win instantly! It's a game of patience and watching what your friends are doing.",
      setup: "Getting ready for Chinchón (a favorite in Spanish-speaking homes):\n\n1. THE CARDS: Use a Spanish deck (40 or 48 cards). If you have Jokers (Comodines), keep them in as wildcards.\n\n2. THE DEAL: Each player is dealt 7 cards. The dealer then places the remaining deck face-down and turns the top card face-up to start the 'Discard Pile'.\n\n3. THE GROUPS: Your goal is to arrange these 7 cards into:\n   - SETS: 3 or 4 cards with the same number (e.g., three 5s).\n   - RUNS: 3 or more consecutive numbers of the same suit (e.g., 4, 5, 6 of Swords).\n\n4. THE SCOREKEEPER: Have a pen and paper ready. In Chinchón, you want to keep your score as LOW as possible. If you reach 100 points, you are out!",
      rules: [
        { title: "Drawing & Discarding", text: "Take a card from the deck or the pile, then throw one you don't need.", boardConfig: "chinchon_meld" },
        { title: "Making Sets", text: "Group 3 or 4 cards of the same number (e.g., three 5s).", boardConfig: "chinchon_meld" },
        { title: "Making Runs", text: "Group 3 or more consecutive cards of the same suit (e.g., 4, 5, 6 of swords).", boardConfig: "chinchon_meld" },
        { title: "Closing (Cortar)", text: "End the round if you have 5 points or less left in your hand (outside of your sets).", boardConfig: "chinchon_victory" }
      ],
      houseRules: [
        "The Joker Penalty: If someone closes and you have a Joker in hand, you get 25 points!",
        "Closing in Zero: Only allow closing if you have 0 points left (everything is in a set).",
        "Re-entry: If you lose, you can pay a 'fee' (imaginary points) to keep playing."
      ],
      kidFriendly: "Matching Colors: For younger kids, just focus on collecting cards of the same suit. Don't worry about the math—the one with the most 'same-colored' cards wins!",
      strategies: [
        "Discard high cards: Throw away Kings and Knights early so they don't count against you.",
        "Don't wait forever: If you can close with 1 or 2 points, do it! Don't risk waiting for a Chinchón.",
        "Watch the pile: If your friend takes a card from the pile, they probably need that suit!"
      ],
      pitfalls: [
        "Holding onto a Joker for too long.",
        "Giving your opponent exactly the card they need.",
        "Forgetting to check if you can already close."
      ],
      stepByStep: [
        { round: 1, description: "Organizing your initial 7 cards into potential groups.", boardConfig: "chinchon_setup" },
        { round: 2, description: "Closing the game with a low card.", boardConfig: "chinchon_meld" }
      ],
      scenarios: [
        { title: "Chinchón!", description: "A perfect 7-card run. This is the holy grail of the game.", boardConfig: "chinchon_victory" },
        { title: "The Joker", description: "Using a wildcard to complete your set. Very useful but dangerous!", boardConfig: "chinchon_setup" }
      ],
      faqs: [
        { question: "What is the point limit?", answer: "Usually 100. If you go over, you are out!" }
      ]
    },
    'es-ar': {
      overview: "El Chinchón es el juego de las reuniones familiares. Armá tus juegos, bajá tus puntos y ganales a todos.",
      manual: "¡El Chinchón es un clásico total! Te dan 7 cartas y tenés que armar 'Juegos'. Un juego puede ser un Trío (tres números iguales) o una Escalera (tres seguidos del mismo palo). \n\nEn cada turno agarrás una carta y tirás otra. Cuando tenés casi todo armado y te sobran 5 puntos o menos, podés 'Cortar' y terminar la ronda. Pero si lográs armar los 7 en escalera, ¡hacés CHINCHÓN! y ganás de una. Es un juego de tener paciencia y mirar qué está juntando el de al lado.",
      setup: "Preparate para el Chinchón (infaltable en cualquier sobremesa):\n\n1. LAS CARTAS: Usá un mazo español (de 40 o 48 cartas). Si tenés Comodines, dejalos que sirven mucho.\n\n2. EL REPARTO: Se reparten 7 cartas a cada jugador. El resto del mazo va boca abajo y la primera carta se pone boca arriba para arrancar el 'Pozo'.\n\n3. LOS GRUPOS: Tu meta es acomodar esas 7 cartas en:\n   - TRÍOS: 3 o 4 cartas del mismo número (ej. tres sotas).\n   - ESCALERAS: 3 o más cartas seguidas del mismo palo (ej. 4, 5 y 6 de Espadas).\n\n4. EL PUNTAJE: Tené a mano papel y birome. Acá el que llega a 100 puntos pierde, así que tenés que tratar de mantener tu puntaje lo más BAJO posible.",
      rules: [
        { title: "Robar y Tirar", text: "Agarrás una del mazo o del pozo, y tirás una que no te sirva.", boardConfig: "chinchon_meld" },
        { title: "Tríos", text: "Juntá 3 o 4 cartas del mismo número.", boardConfig: "chinchon_meld" },
        { title: "Escaleras", text: "Juntá 3 o más cartas seguidas del mismo palo (ej. 1, 2, 3 de bastos).", boardConfig: "chinchon_meld" },
        { title: "Cortar", text: "Podés cerrar la vuelta si te encontrás con todo armado y te sobran 0 puntos.", boardConfig: "chinchon_victory" }
      ],
      houseRules: [
        "Castigo por Comodín: Si te cierran y tenés el comodín en la mano, sumás 25 puntos de una.",
        "Corte en cero: Solo se puede cortar si te encontrás con todo armado y te sobran 0 puntos.",
        "El Enganche: Si perdés, podés volver a entrar pagando puntos."
      ],
      kidFriendly: "Juntá Colores: Para los más chiquitos, que el objetivo sea simplemente juntar cartas del mismo dibujo. No cuenten los puntos, ¡el que tiene más cartas iguales gana!",
      strategies: [
        "Tirá las altas: Descartate los Reyes y Caballos rápido para no sumar mucho si te cierran.",
        "No te duermas: Si podés cortar con pocos puntos, hacelo. No esperes al chinchón si ves que el otro está por cerrar.",
        "Mirá el pozo: Si el otro levanta una carta del pozo, ya sabés qué está juntando. ¡No le des más de eso!"
      ],
      pitfalls: [
        "Quedarse con el comodín mucho tiempo.",
        "Regalarle al otro justo la carta que le faltaba para la escalera.",
        "Olvidarse de que ya tenés menos de 5 puntos para cortar."
      ],
      stepByStep: [
        { round: 1, description: "Acomodando las 7 cartas iniciales para ver qué juegos podés armar.", boardConfig: "chinchon_setup" },
        { round: 2, description: "Cerrando la vuelta con un 2 de copas que te sobró.", boardConfig: "chinchon_meld" }
      ],
      scenarios: [
        { title: "¡Chinchón!", description: "La escalera perfecta de 7 cartas. ¡Sos el rey de la mesa!", boardConfig: "chinchon_victory" },
        { title: "El Comodín", description: "Usar el Joker para terminar tu juego. Muy útil pero un peligro si te cierran.", boardConfig: "chinchon_setup" }
      ],
      faqs: [
        { question: "¿A cuántos puntos se juega?", answer: "Generalmente a 100. El que se pasa, queda afuera." }
      ]
    }
  }
};
